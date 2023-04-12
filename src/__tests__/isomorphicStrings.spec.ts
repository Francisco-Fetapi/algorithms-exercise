import { isomorphicStrings } from "../exercises/isomorphicStrings";

describe("Check if they are isomorphic strings", () => {
  it("Should be working", () => {
    expect(isomorphicStrings("egg", "add")).toBe(true);
    expect(isomorphicStrings("foo", "bar")).toBe(false);
    expect(isomorphicStrings("paper", "title")).toBe(true);
  });
});
