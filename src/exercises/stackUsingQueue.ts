// Problem URL: https://leetcode.com/problems/implement-stack-using-queues/
// You can only use unshift and shift.

export class MyStack<T = any> {
  constructor(private list: T[] = []) {}

  push(x: T): void {
    this.list.unshift(x);
  }

  pop(): T | undefined {
    return this.list.shift();
  }

  top(): T {
    return this.list[0];
  }

  empty(): boolean {
    return this.list.length === 0;
  }
}
