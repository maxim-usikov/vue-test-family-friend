function removeNonLetters(str) {
  return str.replace(/[\W_]/g, '');
}

export default removeNonLetters;
