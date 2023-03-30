import { addBinary } from "../exercises/addBinary";

describe("Add binary numbers", () => {
  it("Should be running well", () => {
    expect(addBinary("11", "1")).toBe("100");
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
