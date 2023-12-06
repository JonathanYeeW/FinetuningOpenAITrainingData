# Generate OpenAI Fine-tune training data with Node.js

This repository aims to share a tool created for generating fine-tuning data for OpenAI models using Node.js. If you choose to download it, please make sure to customize it for your specific use case.

## Installation

1. After cloning or forking this repository, execute the `yarn` command to install all dependencies.
2. If you plan to upload your `generated.jsonl` file, you will need to include a `.env` file with your `OPENAI_API_KEY`.

## Commands

- `start`: Executes the `main()` function once, generating the `generated.jsonl` file.
- `dev`: Runs continuously using nodemon.

Caution: Be careful not to run `yarn dev` while uploading to OPENAI, as it may result in unintentional data submissions.

## Creating Test Data

1. Ensure you have created the `rawData` file in the `src/data` directory. OpenAI requires a minimum of 10 messages to finetune a model, but recommends 50-100.
2. run `yarn start`
3. If your raw data is formatted correctly, the `generated.jsonl` will be saved in `src/data`.

Note: By default, the upload functionality is commented out to prevent unintentional submissions.
