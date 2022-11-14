import { describe, expect, it } from "vitest";

import { numbers, strings } from "../lists";
import { bubbleSort } from "../bubble-sort";

import {
  compareAscSortedItems,
  compareDescSortedItems,
} from "../utils/compare-sorted-items";

const sortMethods = {
  bubbleSort,
};

describe("Bubble sort algorithm", () => {
  const ascendingSortComparator = (a, b) => a - b;

  const sortedNumbers = [...numbers].sort(ascendingSortComparator),
    sortedStrings = [...strings].sort();

  const staticUnsortedNumbers = [3, 9, 8, 5, 6, 4, 10, 1, 7, 2],
    staticSortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (const sortMethod in sortMethods) {
    const sort = sortMethods[sortMethod];

    it("should sort items ascending", () => {
      expect(sort([...numbers], "asc")).toEqual(sortedNumbers);
      expect(sort([...strings], "asc")).toEqual(sortedStrings);

      expect(sort([...staticUnsortedNumbers], "asc")).toEqual(
        staticSortedNumbers
      );
    });

    it("should sort items descending", () => {
      expect(sort([...numbers], "desc")).toEqual([...sortedNumbers].reverse());

      expect(sort([...strings], "desc")).toEqual([...sortedStrings].reverse());

      expect(sort([...staticUnsortedNumbers], "desc")).toEqual(
        [...staticSortedNumbers].reverse()
      );
    });

    it("should sort a bunch of items in any order", () => {
      const randomNumbers = Array.from({ length: 500 }, () =>
          Math.floor(Math.random() * 500)
        ),
        sortedRandomNumbers = [...randomNumbers].sort(ascendingSortComparator);

      expect(sort([...randomNumbers])).toEqual(sortedRandomNumbers);
      expect(sort([...randomNumbers], "desc")).toEqual(
        [...sortedRandomNumbers].reverse()
      );
    });

    it("should compare the items order", () => {
      const randomNumbers = Array.from({ length: 500 }, () =>
        Math.floor(Math.random() * 500)
      );

      expect(
        sort([...randomNumbers], "desc").every(compareDescSortedItems)
      ).toBe(true);

      expect(sort([...randomNumbers], "asc").every(compareAscSortedItems)).toBe(
        true
      );

      expect(sort([...strings], "asc").every(compareAscSortedItems)).toBe(true);

      expect(sort([...strings], "desc").every(compareDescSortedItems)).toBe(
        true
      );

      expect(sort([...numbers], "asc").every(compareAscSortedItems)).toBe(true);

      expect(sort([...numbers], "desc").every(compareDescSortedItems)).toBe(
        true
      );

      expect(
        sort([...staticUnsortedNumbers], "desc").every(compareDescSortedItems)
      ).toBe(true);
    });
  }
});