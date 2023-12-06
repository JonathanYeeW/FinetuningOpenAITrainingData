import { RawData, TrainingData, Conversation, Data } from "../types";

export const convertRawIntoTrainingData = ({
  rawData,
  prompt,
}: {
  prompt: string;
  rawData: RawData[];
}): TrainingData => {
  const training: TrainingData = rawData.map((raw) => {
    const { input, output } = raw;
    const system: Conversation = {
      role: "system",
      content: prompt,
    };
    const user: Conversation = {
      role: "user",
      content: input,
    };
    const assistant: Conversation = {
      role: "assistant",
      content: output,
    };
    const data: Data = { messages: [system, user, assistant] };
    return data;
  });
  return training;
};
