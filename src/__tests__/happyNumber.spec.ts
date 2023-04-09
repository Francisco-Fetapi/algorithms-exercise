import { happyNumber } from "../exercises/happyNumber";

describe("Find out if the number is 'happy'", () => {
  it("Should be working", () => {
    expect(happyNumber(19)).toBe(true);
    expect(happyNumber(2)).toBe(false);
  });
});
