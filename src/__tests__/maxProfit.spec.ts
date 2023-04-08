import { maxProfit } from "../exercises/maxProfit";

describe("Best Time to Buy and Sell Stock", () => {
  it("Should be running well", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
