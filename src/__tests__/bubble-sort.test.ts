import { describe, expect, it } from "vitest";

import { numbers, strings } from "../lists";
import { bubbleSort } from "../bubble-sort";

import {
  compareAscSortedItems,
  compareDescSortedItems,
} from "../utils/compare-sorted-items";

describe("Bubble sort algorithm", () => {
  const ascendingSortComparator = (a, b) => a - b;

  const sortedNumbers = [...numbers].sort(ascendingSortComparator),
    sortedStrings = [...strings].sort();

  const staticUnsortedNumbers = [3, 9, 8, 5, 6, 4, 10, 1, 7, 2],
    staticSortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("should sort items ascending", () => {
    expect(bubbleSort([...numbers], "asc")).toEqual(sortedNumbers);
    expect(bubbleSort([...strings], "asc")).toEqual(sortedStrings);

    expect(bubbleSort([...staticUnsortedNumbers], "asc")).toEqual(
      staticSortedNumbers
    );
  });

  it("should sort items descending", () => {
    expect(bubbleSort([...numbers], "desc")).toEqual(
      [...sortedNumbers].reverse()
    );

    expect(bubbleSort([...strings], "desc")).toEqual(
      [...sortedStrings].reverse()
    );

    expect(bubbleSort([...staticUnsortedNumbers], "desc")).toEqual(
      [...staticSortedNumbers].reverse()
    );
  });

  it("should sort a bunch of items in any order", () => {
    const randomNumbers = Array.from({ length: 500 }, () =>
        Math.floor(Math.random() * 500)
      ),
      sortedRandomNumbers = [...randomNumbers].sort(ascendingSortComparator);

    expect(bubbleSort([...randomNumbers])).toEqual(sortedRandomNumbers);
    expect(bubbleSort([...randomNumbers], "desc")).toEqual(
      [...sortedRandomNumbers].reverse()
    );
  });

  it("should compare the items order", () => {
    const randomNumbers = Array.from({ length: 500 }, () =>
      Math.floor(Math.random() * 500)
    );

    expect(
      bubbleSort([...randomNumbers], "desc").every(compareDescSortedItems)
    ).toBe(true);

    expect(
      bubbleSort([...randomNumbers], "asc").every(compareAscSortedItems)
    ).toBe(true);

    expect(bubbleSort([...strings], "asc").every(compareAscSortedItems)).toBe(
      true
    );

    expect(bubbleSort([...strings], "desc").every(compareDescSortedItems)).toBe(
      true
    );

    expect(bubbleSort([...numbers], "asc").every(compareAscSortedItems)).toBe(
      true
    );

    expect(bubbleSort([...numbers], "desc").every(compareDescSortedItems)).toBe(
      true
    );

    expect(
      bubbleSort([...staticUnsortedNumbers], "desc").every(
        compareDescSortedItems
      )
    ).toBe(true);
  });
});
