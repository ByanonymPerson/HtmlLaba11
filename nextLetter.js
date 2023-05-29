console.log(nextLetter("abc")); // "bcd"
console.log(nextLetter("XYZ")); // "YZA"
console.log(nextLetter("Hello, world!")); // "Ifmmp, xpsme!"

function nextLetter(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      let charCode = s.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        result += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
      } else if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        result += String.fromCharCode(((charCode - 65 + 1) % 26) + 65);
      } else {
        // non-alphabetic characters
        result += s.charAt(i);
      }
    }
    return result;
  }
  