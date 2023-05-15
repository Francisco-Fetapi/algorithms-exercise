import { daysBetweenDates } from "../exercises/daysBetweenDates";

describe("Get the difference of two dates", () => {
  it("Should be working", () => {
    expect(daysBetweenDates("2022-11-22", "2022-11-25")).toBe(3);
    expect(daysBetweenDates("2022-11-22", "2022-11-28")).toBe(6);
  });
});
