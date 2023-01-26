import { describe, expect, it } from "vitest";
import { binarySearch } from "../binary-search";

describe("Binary search algorithm", () => {
  const createSequencialList = (length: number) =>
    Array.from({ length }, (_, index) => index + 1);

  const getRandomItem = <T>(list: T[]): T => {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  };

  it("should return null for items outside the range of the items within the list", () => {
    const list = createSequencialList(100);

    expect(binarySearch(list, 101)).toBeUndefined();
    expect(binarySearch(list, 0)).toBeUndefined();
    expect(binarySearch(list, -1)).toBeUndefined();
  });

  it("should find items in a small lists", () => {
    for (let length = 1; length <= 10; length++) {
      const list = createSequencialList(length);
      const seekItem = getRandomItem(list);
      expect(binarySearch(list, seekItem)).toBe(seekItem);
    }
  });

  it("should find items at the boundaries of the list", () => {
    const list = createSequencialList(200),
      startBoundaries = list.slice(0, 5),
      endBoundaries = list.slice(-5);

    [...startBoundaries, ...endBoundaries].forEach((seek) =>
      expect(binarySearch(list, seek)).toBe(seek)
    );
  });

  it("should find items at the boundaries of the list", () => {
    const list = createSequencialList(200),
      startBoundaries = list.slice(0, 5),
      endBoundaries = list.slice(-5);

    [...startBoundaries, ...endBoundaries].forEach((seek) =>
      expect(binarySearch(list, seek)).toBe(seek)
    );
  });

  it("should find items within a large list", () => {
    const listLength = 250 * 1000;
    const list = createSequencialList(listLength);

    const min = 1,
      mid = Math.floor(listLength / 2),
      max = listLength;

    expect(binarySearch(list, min)).toBe(min);
    expect(binarySearch(list, mid)).toBe(mid);
    expect(binarySearch(list, max)).toBe(max);
  });

  it("should throw an error when a range outside the list range is passed", () => {
    const invalidRanges: Array<[number, number]> = [
      [-1, 5],
      [0, 12],
      [0, -11],
      [11, 10],
      [10, -1],
    ];

    invalidRanges.forEach((range) => {
      expect(() =>
        binarySearch(createSequencialList(10), null, ...range)
      ).toThrowError();
    });
  });
});
