export const getFirstChar = (str) => str[0].toUpperCase();

export const changeObjectInArray = (items, itemId, objPropName, obj) => items.users.map((i) => {
  if (i[objPropName] === itemId) {
    return { ...i, ...obj };
  }
  return i;
});
