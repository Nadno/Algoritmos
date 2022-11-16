export const bubbleSort = <T>(
  list: T[],
  order: "asc" | "desc" = "asc"
): T[] => {
  const listLength = list.length;

  const compare =
    order === "asc"
      ? (current: T, next: T) => current > next // ASCENDING
      : (current: T, next: T) => current < next; // DESCENDING

  /**
   * There's no need for the first iteration variable `_`,
   * that is used just to iterate `list.length` times, as the bubble sort algorithm asks
   */
  for (let _ = 0; _ < listLength; _++) {
    // `listLength - 1` cause the last item hasn't a next item to switch places
    for (let index = 0; index < listLength - 1; index++) {
      const current = list[index],
        next = list[index + 1];
      if (!compare(current, next)) continue;

      list[index] = next;
      list[index + 1] = current;
    }
  }

  return list;
};
