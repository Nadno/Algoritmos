export const insertionSort = <T>(
  list: T[],
  order: "asc" | "desc" = "asc"
): T[] => {
  const listLength = list.length,
    result: T[] = new Array(listLength);

  const compare =
    order === "asc"
      ? (sorting: T, sorted: T) => sorting < sorted // ASCENDING
      : (sorting: T, sorted: T) => sorting > sorted; // DESCENDING

  for (let sortingIndex = 0; sortingIndex < listLength; sortingIndex++) {
    const sortingItem = list[sortingIndex];
    if (sortingIndex === 0) {
      result[sortingIndex] = sortingItem;
      continue;
    }

    for (let sortedIndex = sortingIndex - 1; sortedIndex >= 0; sortedIndex--) {
      const sortedItem = result[sortedIndex];

      /**
       * If the item is not greater or less than the sorted item,
       * it can be added to the previously opened position.
       * Then, the iteration is stopped.
       */
      if (!compare(sortingItem, sortedItem)) {
        result[sortedIndex + 1] = sortingItem;
        break;
      }

      /**
       * While the item position is not found, move the sorted items
       * to open space to the new item.
       */
      result[sortedIndex + 1] = sortedItem;
      result[sortedIndex] = sortingItem;
    }
  }

  return result;
};
