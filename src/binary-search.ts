const isValidRange = (start: number, end: number) => end - start >= 0;

export const binarySearch = <T>(
  list: T[],
  item: T,
  start: number = 0,
  end = list.length - 1
): T | undefined => {
  if (!(start in list) || !(end in list))
    throw new RangeError(`The list range [${start} -> ${end}] is invalid!`);

  const mid = Math.floor((start + end) / 2);
  if (item < list[mid] && isValidRange(start, mid - 1))
    return binarySearch(list, item, start, mid - 1);
  if (item > list[mid] && isValidRange(mid + 1, end))
    return binarySearch(list, item, mid + 1, end);
  if (Object.is(item, list[mid])) return list[mid];

  return undefined;
};
