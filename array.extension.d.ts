//extensions/array.extension.js

declare global {
  interface String {
    swap(): Array<>;
    swap2Values(): Array<>;
    removeDuplicates(): Array<>;
  }
}

export {};
