import axios from "axios";

export const wordsArray = require("an-array-of-english-words");

export const getDefByWord = (word) => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
