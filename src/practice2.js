const inject = (items, sections) => {
  let flag = 0;
  for (let section of sections) {
    const { content, index } = section;
    items.splice(index + flag, 1, ...[content, items[index + flag]]);
    flag++;
  }
  return items;
};
export { inject };
