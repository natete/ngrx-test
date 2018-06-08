let start = Math.floor(Math.random() * 5000);

// fake newId starting at random number
export const newId = () => {
  return ++start;
};
