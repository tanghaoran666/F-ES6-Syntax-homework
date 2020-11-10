const parseData = (input) => {
  const persons = [];
  for (let v of input.data) {
    const person = {};
    let index = 0;
    for (let c of input.column) {
      person[c.name] = v[index];
      index++;
    }
    persons.push(person);
  }
  return persons;
};
export { parseData };
