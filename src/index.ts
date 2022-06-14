/**
 *  Capitalizes every word in str.
 * @param str an English sentence or phrase.
 */
function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export { capitalize };
