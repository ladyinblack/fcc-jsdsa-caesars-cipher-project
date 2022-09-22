// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Caesars Cipher</h1>`;

/** TODO:
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.  In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.  Thus A <-> N, B <-> O and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase.  Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  const rotArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const key = 13;
  let newStr = [];

  for (let d = 0; d < str.length; d++) {
    let currChar = str.charAt(d);
    let idx = rotArr.indexOf(currChar);

    let newIdx;
    if (idx != -1) {
      newIdx = idx + key;
      if (newIdx >= rotArr.length) {
        newIdx -= rotArr.length;
      }
      newStr.push(rotArr[newIdx]);
    } else newStr.push(str.charAt(d));
  }
  return newStr.join('');
}

console.log('SERR PBQR PNZC =>', rot13('SERR PBQR PNZC'));
console.log('SERR CVMMN! =>', rot13('SERR CVMMN!'));
console.log('SERR YBIR? =>', rot13('SERR YBIR?'));
console.log(
  'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. =>',
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
);
