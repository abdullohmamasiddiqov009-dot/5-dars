function getLongWords(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      result.push(arr[i].toUpperCase());
    }
  }
  return result;
}
console.log(getLongWords(["apple", "cat", "banana"]));

//======================================================================

function removeNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let hasNum = false;
    for (let j = 0; j < word.length; j++) {
      if (word[j] >= "0" && word[j] <= "9") {
        hasNum = true;
        break;
      }
    }
    if (hasNum === false) {
      result.push(word);
    }
  }
  return result;
}
console.log(removeNumbers(["olma", "olma7", "anor"]));

//==========================

function getLastThree(arr) {
  return arr.slice(-3);
}
console.log(getLastThree([1, 2, 3, 4, 5]));

//==========================================================

function sortDescending(arr) {
  return arr.sort().reverse();
}
console.log(sortDescending([1, 5, 2, 8]));

//==============================================

function addExclamation(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + "!");
  }
  return result;
}
console.log(addExclamation(["salom", "xayr"]));

//===========================================================================

function findFirstShort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 3) {
      return arr[i];
    }
  }
  return null;
}
console.log(findFirstShort(["olma", "ok", "behi"]));

//======================

function checkIncludes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "banana") {
      return true;
    }
  }
  return false;
}
console.log(checkIncludes(["apple", "banana"]));

//====================================================

function getIndexes(arr) {
  let first = arr.indexOf("b");
  let last = arr.lastIndexOf("b");
  return first + " va " + last;
}
console.log(getIndexes(["a", "b", "c", "b"]));

//==================================

function addAndRemove(arr) {
  arr.unshift(0);
  arr.pop();
  return arr;
}
console.log(addAndRemove([1, 2, 3]));

//===============================================================================

function cleanAndJoin(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].trim();
    if (i === 0) {
      res = word;
    } else {
      res = res + ", " + word;
    }
  }
  return res;
}
console.log(cleanAndJoin(["  olma", " anor  "]));
