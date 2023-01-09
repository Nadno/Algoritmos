const switchArrayPositions = (array: any[], from: number, to: number): void => {
  const aux = array[from];
  array[from] = array[to];
  array[to] = aux;
};

const equalTo = <T>(a: T, b: T) => a === b;

const lessThan = <T>(a: T, b: T) => a < b;

const greaterThan = <T>(a: T, b: T) => a > b;

/**
 * Sort an array item position.
 * @param array - an array
 * @param target - the target index to be sorted
 * @returns sortedTargeIndex
 */
const sortTarget = <T>(
  order: "asc" | "desc",
  array: T[],
  start: number,
  end: number,
  target: number
): number => {
  let count = 0;

  const compare = order === "asc" ? lessThan : greaterThan;

  for (let current = start; current <= end; current++) {
    if (equalTo(current, target) || !compare(array[current], array[target]))
      continue;

    count++;
  }

  const sortedTargetIndex = start + count;
  switchArrayPositions(array, target, sortedTargetIndex);
  return sortedTargetIndex;
};

const moveItemsByTarget = (
  order: "asc" | "desc",
  array: any[],
  start: number,
  end: number,
  target: number
) => {
  const compare = order === "asc" ? lessThan : greaterThan;

  for (
    let current = start, destination = start;
    current <= end && destination < target;
    current++
  ) {
    if (equalTo(current, target) || !compare(array[current], array[target]))
      continue;

    switchArrayPositions(array, current, destination);
    destination++;
  }

  return array;
};

export function quickSort<T>(
  array: T[],
  order: "asc" | "desc" = "asc",
  start = 0,
  end = array.length - 1
): T[] {
  if (end - start < 1) return array;

  const targetIndex = Math.floor((start + end) / 2),
    sortedTargetIndex = sortTarget(order, array, start, end, targetIndex);

  moveItemsByTarget(order, array, start, end, sortedTargetIndex);

  quickSort(array, order, start, sortedTargetIndex - 1);
  quickSort(array, order, sortedTargetIndex + 1, end);

  return array;
}
