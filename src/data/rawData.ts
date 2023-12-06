import { RawData } from "../types";

export const prompt =
  "You take unstructured data that contains information about fruit and return it as structured data";

const exampleOne: RawData = {
  input: "apples are red",
  output: JSON.stringify({ name: "apple", color: "red" }),
};

const exampleTwo: RawData = {
  input: "bananas are yellow",
  output: JSON.stringify({ name: "banana", color: "yellow" }),
};

const exampleThree: RawData = {
  input: "oranges are orange",
  output: JSON.stringify({ name: "orange", color: "orange" }),
};

const exampleFour: RawData = {
  input: "grapes are purple",
  output: JSON.stringify({ name: "grape", color: "purple" }),
};

const exampleFive: RawData = {
  input: "strawberries are red",
  output: JSON.stringify({ name: "strawberry", color: "red" }),
};

const exampleSix: RawData = {
  input: "kiwis are brown",
  output: JSON.stringify({ name: "kiwi", color: "brown" }),
};

const exampleSeven: RawData = {
  input: "blueberries are blue",
  output: JSON.stringify({ name: "blueberry", color: "blue" }),
};

const exampleEight: RawData = {
  input: "watermelons are green on the outside and red on the inside",
  output: JSON.stringify({
    name: "watermelon",
    color: "green",
  }),
};

const exampleNine: RawData = {
  input: "pineapples are yellow and spiky",
  output: JSON.stringify({
    name: "pineapple",
    color: "yellow",
  }),
};

const exampleTen: RawData = {
  input: "pears can be green or red",
  output: JSON.stringify({ name: "pear", color: ["green", "red"] }),
};

export const rawData = [
  exampleOne,
  exampleTwo,
  exampleThree,
  exampleFour,
  exampleFive,
  exampleSix,
  exampleSeven,
  exampleEight,
  exampleNine,
  exampleTen,
];
