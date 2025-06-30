function getMichaelLastName(inputText) {
  // your awesome code here
   const words = inputText.split(/\s+/);
  const result = [];

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === "Michael") {
      const next = words[i + 1].replace(/[^A-Za-z]/g, '');

      if (/^[A-Z][a-z]+$/.test(next)) {
        result.push(next);
      }
    }
  }

  return result;
}
console.log(getMichaelLastName("Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?"))