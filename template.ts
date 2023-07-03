export const defaultPromptTemplate = [
  "suggest 10 commit messages based on the following diff:",
  "{{diff}}",
  "",
  "commit messages should:",
  " - follow conventional commits",
  " - message format should be: <type>: <description>",

  "",
  "examples:",
  " - fix: add password regex pattern",
  " - feat: add new test cases",
].join("\n");
