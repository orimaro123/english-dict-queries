import { makeAutoObservable } from "mobx";

const wordsArray = require("an-array-of-english-words");

class Store {
  wordList = wordsArray;
  currentWord = "";
  timesAppeared = 0;
  startAppeared = 0;
  endAppeared = 0;
  repeatedCount = 0;

  updateWord(newWord) {
    this.currentWord = newWord;
    this.timesAppeared = this.timesIncludedCount();
    this.startAppeared = this.startLetterCount();
    this.endAppeared = this.endLetterCount();
    this.repeatedCount = this.repeatedLetterCount();
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
    let count = 0;
    this.wordList.forEach((element) => {
      
      if (element.includes(this.currentWord)) {
        //count += (element.match(/element/g) || []).length;
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
