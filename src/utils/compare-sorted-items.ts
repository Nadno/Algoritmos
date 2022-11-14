export const createCompareSortedItems = <T>(order: "asc" | "desc") => {
  const compare =
    order === "asc"
      ? (item: T, index: number, items: T[]) =>
          index + 1 in items ? item <= items[index + 1] : true
      : (item: T, index: number, items: T[]) =>
          index + 1 in items ? item >= items[index + 1] : true;

  return compare;
};

export const compareAscSortedItems = createCompareSortedItems("asc");

export const compareDescSortedItems = createCompareSortedItems("desc");
