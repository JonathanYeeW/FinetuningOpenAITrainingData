import fs from "fs";
import { TrainingData } from "../types";

export const transformIntoJSONL = async (trainingData: TrainingData) => {
  const filepath = "./src/data/generated.jsonl";
  const jsonl = trainingData
    .map((data) => JSON.stringify(data))
    .flat()
    .join("\n");

  fs.writeFileSync(filepath, jsonl);
  return filepath;
};
