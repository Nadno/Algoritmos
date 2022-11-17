export const selectionSort = <T>(
  list: T[],
  order: "asc" | "desc" = "asc"
): T[] => {
  const listLength = list.length;
  if (!listLength) return list;

  const compare =
    order === "asc"
      ? (current: T, next: T) => next < current // ASCENDING
      : (current: T, next: T) => next > current; // DESCENDING

  for (let currentIndex = 0; currentIndex < listLength - 1; currentIndex++) {
    let minItemIndex = currentIndex;

    for (
      let nextIndex = currentIndex + 1;
      nextIndex < listLength;
      nextIndex++
    ) {
      // Select the min or max item index
      if (compare(list[minItemIndex], list[nextIndex]))
        minItemIndex = nextIndex;
    }

    // Switch the min item with the current item
    const aux = list[minItemIndex];
    list[minItemIndex] = list[currentIndex];
    list[currentIndex] = aux;
  }

  return list;
};
