export const linearSearch = <T>(list: T[], item: T): T | null => {
  let result: T | null = null;

  const listLength = list.length;

  for (let index = 0; index <= listLength; index++) {
    const listItem = list[index];
    if (Object.is(listItem, item)) {
      result = listItem;
      break;
    }
  }

  return result;
};
