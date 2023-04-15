import { MyStack } from "../exercises/stackUsingQueue";

describe("Create a Stack using a Queue", () => {
  it("Should be working", () => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);

    expect(myStack.top()).toBe(2);
    expect(myStack.pop()).toBe(2);
    expect(myStack.empty()).toBe(false);
  });
});
