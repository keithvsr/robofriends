const hashedName = (name) => {
  const len = name.length;
  let hash = 5381;

  for (let i = 0; i < len; i++) {
    hash = (hash * 33) ^ name.charCodeAt(i);
  }
  return (hash >>> 0).toString(32);
};

export default hashedName;
