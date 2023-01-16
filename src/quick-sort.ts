const switchArrayPositions = (array: any[], from: number, to: number): void => {
  const aux = array[from];
  array[from] = array[to];
  array[to] = aux;
};

const lessOrEqualThan = <T>(a: T, b: T) => a <= b;

const greaterOrEqualThan = <T>(a: T, b: T) => a >= b;

const partition = (
  order: "asc" | "desc",
  array: any[],
  start: number,
  end: number
) => {
  const compare = order === "asc" ? lessOrEqualThan : greaterOrEqualThan;

  const pivot = end;
  let destination = start;

  for (let current = start; current <= end; current++) {
    if (current === pivot) continue;
    if (compare(array[current], array[pivot])) {
      switchArrayPositions(array, current, destination);
      destination++;
    }
  }

  switchArrayPositions(array, destination, pivot);

  return destination;
};

export function quickSort<T>(
  array: T[],
  order: "asc" | "desc" = "asc",
  start = 0,
  end = array.length - 1
): T[] {
  if (start >= end) return array;

  const pivotIndex = partition(order, array, start, end);
  quickSort(array, order, start, pivotIndex - 1);
  quickSort(array, order, pivotIndex + 1, end);

  return array;
}
