import { TrainingData } from "../types";

export const verifyTrainingData = (trainingData: TrainingData) => {
  if (trainingData == null) throw new Error("Missing training data");
  const formatErrors = {};

  validateTrainingData(trainingData, formatErrors);

  if (Object.keys(formatErrors).length > 0) {
    console.log("Found errors:");
    Object.entries(formatErrors).forEach(([k, v]) => {
      console.log(`${k}: ${v}`);
    });
    throw new Error("ERRORS FOUND");
  }
};

const validateTrainingData = (
  trainingData: TrainingData,
  formatErrors: { [key: string]: number }
) => {
  // Iterate through each training data example
  trainingData.forEach((ex) => {
    // Step 1: Confirm the data is an object
    if (!(ex instanceof Object)) {
      formatErrors["data_type"] = (formatErrors["data_type"] || 0) + 1;
      return;
    }

    // Step 2: Check if 'messages' is missing
    const messages = ex.messages || null;
    if (!messages) {
      formatErrors["missing_messages_list"] =
        (formatErrors["missing_messages_list"] || 0) + 1;
      return;
    }

    // Step 3: Confrim each conversation is propertly formatted
    messages.forEach((message) => {
      // Check if 'role' and 'content' keys are present in the message
      if (!("role" in message) || !("content" in message)) {
        formatErrors["message_missing_key"] =
          (formatErrors["message_missing_key"] || 0) + 1;
      }

      // Check if there are any unrecognized keys in the message
      const allowedKeys = ["role", "content", "name", "function_call"];
      ["role", "content", "name", "function_call"].some((k) => !(k in message));
      const messageKeys = Object.keys(message);
      const unrecognizedKeyExists = messageKeys.some(
        (messageKey) => !allowedKeys.includes(messageKey)
      );
      if (unrecognizedKeyExists) {
        formatErrors["message_unrecognized_key"] =
          (formatErrors["message_unrecognized_key"] || 0) + 1;
      }

      // Check if the 'role' value is one of the recognized values
      const allowedRoles = ["system", "user", "assistant", "function"];
      if (!allowedRoles.includes(message.role)) {
        formatErrors["unrecognized_role"] =
          (formatErrors["unrecognized_role"] || 0) + 1;
      }

      // Retrieve 'content' and 'function_call' properties from the message
      const content = message.content || null;
      const functionCall = message.function_call || null;
      // Check if 'content' is missing or not a string
      if ((!content && !functionCall) || typeof content !== "string") {
        formatErrors["missing_content"] =
          (formatErrors["missing_content"] || 0) + 1;
      }
    });

    // Check if at least one message has 'role' equal to "assistant"
    const assistantRoleExists = !messages.some(
      (message) => message.role === "assistant"
    );
    if (assistantRoleExists) {
      formatErrors["example_missing_assistant_message"] =
        (formatErrors["example_missing_assistant_message"] || 0) + 1;
    }
  });
};
