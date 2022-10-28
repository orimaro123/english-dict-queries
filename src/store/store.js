import { makeAutoObservable } from "mobx";

import { wordsArray } from "../service/dictService";

class Store {
  wordList = wordsArray;
  currentWord = "";
  currentWordDef = "";

  updateWord(newWord) {
    this.currentWord = newWord;
  }

  updateCurrentDefinition(defList) {
    this.currentWordDef = defList;
  }

  wordsCount() {
    return this.currentWord.length;
  }

  startLetterCount() {
    const wordExpression = new RegExp(`^${this.currentWord}`);

    return this.wordList.filter((word) => wordExpression.test(word)).length ?? 0;
  }

  endLetterCount() {
    const wordExpression = new RegExp(`${this.currentWord}$`, "i");
    return this.wordList.filter((word) => wordExpression.test(word)).length ?? 0;
  }

  timesIncludedCount() {
    let counter = 0;

    this.wordList.forEach((element) => {
      if (element.includes(this.currentWord)) {
        counter++;
      }
    });
    return counter;
  }

  repeatedLetterCount() {
    let counter = 0;
    this.wordList.forEach((element) => {
      if (element.includes(`${this.currentWord}${this.currentWord}`)) {
        counter++;
      }
    });

    return counter;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const storeInstance = new Store();

export default storeInstance;
