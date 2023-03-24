// Problem URL: https://leetcode.com/problems/valid-parentheses

type IValidKeys = "(" | "[" | "{";

export function paranthesesIsValid(s: string): boolean {
  let paranthesesFrequency = {
    "(": 0,
    "[": 0,
    "{": 0,
  };

  const arrayStr = s.split("");

  for (let key in arrayStr) {
    let symb = s[key];
    if (["(", "[", "{"].includes(symb)) {
      paranthesesFrequency[symb as IValidKeys]++;
    }
    let currentSymbolToClose = null;
    if (symb === ")") {
      currentSymbolToClose = "(";
    }
    if (symb === "]") {
      currentSymbolToClose = "[";
    }
    if (symb === "}") {
      currentSymbolToClose = "{";
    }
    if (currentSymbolToClose) {
      paranthesesFrequency[currentSymbolToClose as IValidKeys]--;
    }

    if (paranthesesFrequency[currentSymbolToClose as IValidKeys] < 0) {
      return false;
    }
  }

  return Object.values(paranthesesFrequency).every((v) => v === 0);
}
