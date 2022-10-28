import { makeAutoObservable } from "mobx";

import { wordsArray } from "./dictService";

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

  get startLetterCount() {
    const re = new RegExp(`^${this.currentWord}`);

    return this.wordList.filter((d) => re.test(d)).length ?? 0;
  }

  get endLetterCount() {
    const re = new RegExp(`${this.currentWord}$`, "i");
    return this.wordList.filter((d) => re.test(d)).length ?? 0;
  }

  get timesIncludedCount() {
    let counter = 0;

    this.wordList.forEach((element) => {
      if (element.includes(this.currentWord)) {
        counter++;
      }
    });
    return counter;
  }

  get repeatedLetterCount() {
    
    
    return 100; //this.wordList.filter((d) => d.match("^.*(.)\\1{1}.*$")).length ?? 0;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const storeInstance = new Store();

export default storeInstance;
