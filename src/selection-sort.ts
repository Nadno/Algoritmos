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
    let current = list[currentIndex];

    for (
      let nextIndex = currentIndex + 1;
      nextIndex < listLength;
      nextIndex++
    ) {
      const next = list[nextIndex];
      if (compare(current, next)) {
        list[currentIndex] = next;
        list[nextIndex] = current;
        current = next;
      }
    }
  }

  return list;
};
