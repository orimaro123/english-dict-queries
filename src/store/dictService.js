import axios from "axios";

export const wordsArray = require("an-array-of-english-words");

export const getDefByWord = (word) => {
  return axios
    .request({
      method: "GET",
      url: `https://api.dictionaryapi.dev/api/v2/entries/en_US/`,
      params: word,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
    });
};
