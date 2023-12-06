import { prompt, rawData } from "./data";
import {
  convertRawIntoTrainingData,
  transformIntoJSONL,
  uploadTrainingData,
  verifyTrainingData,
} from "./utilities";

const main = async () => {
  try {
    // Step 1: Convert raw into training data
    const trainingData = convertRawIntoTrainingData({ prompt, rawData });

    // Step 2: Verify the training data is properly formatted
    verifyTrainingData(trainingData);

    // Step 3: create JSONL file
    const jsonlFileLocation = await transformIntoJSONL(trainingData);

    // Step 4: Upload to openai

    // WARNING! make sure you only upload once

    // await uploadTrainingData(jsonlFileLocation);
    // console.log("Successfully uploaded training data!");
  } catch (unknownError) {
    console.log(unknownError);
  }
};

main();
