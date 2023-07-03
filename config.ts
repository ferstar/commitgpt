import enquirer from "enquirer";
import { getConfig, setGlobalConfig } from "./config_storage.js";

async function promptProxy() {
  try {
    const answer = await enquirer.prompt<{ pai_gpt_proxy: string }>({
      type: "input",
      name: "pai_gpt_proxy",
      message: "Paste your PAI GPT proxy url here:",
    });

    return answer.pai_gpt_proxy;
  } catch (e) {
    console.log("Aborted.");
    process.exit(1);
  }
}

export async function getPaiProxy(clean?: boolean): Promise<string> {
  let pai_gpt_proxy = getConfig<string | undefined>("pai_gpt_proxy");

  if (clean) {
    pai_gpt_proxy = undefined;
  }

  if (!pai_gpt_proxy) {
    pai_gpt_proxy = await promptProxy();
    setGlobalConfig("pai_gpt_proxy", pai_gpt_proxy);
  }

  return pai_gpt_proxy;
}
