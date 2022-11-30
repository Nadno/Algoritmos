const lessThan = <T>(left: T, right: T) => left < right,
  greaterThan = <T>(left: T, right: T) => left > right;

const merge = <T>(
  list: T[],
  start: number,
  mid: number,
  end: number,
  order: "asc" | "desc" = "asc"
): T[] => {
  /**
   * The lists must be duplicated to allow us to
   * replace the items within the original list.
   */
  const leftList = list.slice(start, mid),
    rightList = list.slice(mid, end),
    leftLength = mid - start,
    rightLength = end - mid;

  const firstCompare = order === "asc" ? lessThan : greaterThan,
    secondCompare = order === "asc" ? greaterThan : lessThan;

  let index = start,
    leftIndex = 0,
    rightIndex = 0;

  /**
   * The lists items will be compared and the less or greater one
   * will be placed at the `index` position.
   * Notice that the `index` represents the position from the new
   * (imaginary) list created from the merge process.
   */

  while (leftIndex < leftLength && rightIndex < rightLength) {
    const left = leftList[leftIndex],
      right = rightList[rightIndex];

    if (firstCompare(left, right)) {
      list[index] = left;
      leftIndex++;
    } else if (secondCompare(left, right)) {
      list[index] = right;
      rightIndex++;
    } else {
      list[index++] = left;
      list[index] = right;

      leftIndex++;
      rightIndex++;
    }

    index++;
  }

  /**
   * In cases where a list is longer then another,
   * the items can be appended to the remaining space.
   * Notice that only one of the next loops will perform
   * in these cases.
   */

  while (leftIndex < leftLength) {
    list[index++] = leftList[leftIndex++];
  }

  while (rightIndex < rightLength) {
    list[index++] = rightList[rightIndex++];
  }

  return list;
};

export function mergeSort<T>(
  list: T[],
  order: "asc" | "desc" = "asc",
  start = 0,
  end = list.length
): T[] {
  if (end - start <= 1) return list;

  const mid = Math.floor((end + start) / 2);
  /**
   * An imaginary division is created to avoid high resource consumption.
   * The list is divided into two, till its min unit (one list, with one item),
   * at the end of the recursions, two lists with one item, and also sorted
   * cause it has only one item, will be available.
   */
  mergeSort(list, order, start, mid);
  mergeSort(list, order, mid, end);

  /**
   * Then the sorted lists will be merged into a sorted one.
   * The `merge` does not create a new list, it just replace,
   * the list items into the range from `start` to `end`.
   */
  merge(list, start, mid, end, order);

  /**
   * At the last recursion, the sorted lists will be
   * available to the previous call at the stack,
   * that will call `merge` again.
   * And this happens till all `mergeSort` at the call stack
   * has been executed.
   */

  return list;
}
