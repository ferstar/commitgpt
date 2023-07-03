// Adapted from: https://github.com/wong2/chat-gpt-google-extension/blob/main/background/index.mjs

import axios from "axios";
import { getPaiProxy } from "./config.js";
import { getConfig } from "./config_storage.js";


const gpt_proxy_url = await getPaiProxy() ?? getConfig<string>("pai_gpt_url");

export class ChatGPTClient {
  async getAnswer(question: string): Promise<string> {
    const payload = {
      messages: [
        {
          role: "assistant",
          content: question,
        },
      ],
      user_id: 9527,
      app: "commitgpt",
      ratio: 1,
    };
    
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const result = await axios.post(gpt_proxy_url, payload, { headers });
      return result.data["content"];
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
