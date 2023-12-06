export interface Conversation {
  role: "system" | "user" | "assistant";
  content: string;
  name?: any; // i didn't use these so you'll need to investigate
  function_call?: any; // i didn't use these so you'll need to investigate
}

export interface Data {
  messages: Conversation[];
}

export type TrainingData = Data[];
