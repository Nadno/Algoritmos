import { describe, expect, it } from "vitest";

import { numbers, strings } from "../lists";
import { linearSearch } from "../linear-search";

describe("Linear search algorithm", () => {
  it("should return null if the searched item wasn't found", () => {
    expect(linearSearch(strings, "1")).toBeNull();
  });

  it("should return the passed value when found", () => {
    expect(linearSearch(strings, "lorem")).toBe("lorem");
    expect(linearSearch(numbers, 0)).toBe(0);
    expect(linearSearch(numbers, 6)).toBe(6);
  });

  it("should (use: `Object.is`) differentiate -0 from 0", () => {
    expect(linearSearch(numbers, -0)).toBeNull();
    expect(linearSearch([-0], 0)).toBeNull();

    expect(linearSearch([0, -0], -0)).toBe(-0);
    expect(linearSearch([-0, 0], 0)).toBe(0);
  });
});
