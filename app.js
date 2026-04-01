function getLongWords(arr) {
  let result = arr.filter((v) => v.length > 4).map((v) => v.toUpperCase());
  return result;
}
console.log(getLongWords(["olma", "anor", "shaftoli"]));

//======================================================================

function removeNumbers(arr) {
  let result = arr.filter((v) => {
    let hasNum = v.split("").some((c) => c >= "0" && c <= "9");
    if (hasNum === true) {
      return false;
    } else {
      return true;
    }
  });
  return result;
}
console.log(removeNumbers(["olma", "mashina7", "anor", "2chi"]));

//==========================

function getLastThree(arr) {
  let result = arr.slice(-3);
  return result;
}
console.log(getLastThree([1, 2, 3, 4, 5]));

//==========================================================

function sortDescending(arr) {
  let result = arr.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  return result;
}
console.log(sortDescending([5, 2, 9, 1]));

//==============================================

function addExclamation(arr) {
  let result = arr.map((v) => v + "!");
  return result;
}
console.log(addExclamation(["salom", "xayr"]));

//===========================================================================

function findFirstShort(arr) {
  let result = arr.find((v) => {
    if (v.length < 3) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
console.log(findFirstShort(["olma", "ok", "behi"]));

//======================

function checkIncludes(arr) {
  let exists = arr.includes("banana");
  if (exists === true) {
    return "Bor";
  } else {
    return "Yo'q";
  }
}
console.log(checkIncludes(["apple", "banana"]));

//====================================================

function getIndexes(arr) {
  let firstIndex = arr.indexOf("b");
  let lastIndex = arr.lastIndexOf("b");
  return firstIndex + " va " + lastIndex;
}
console.log(getIndexes(["a", "b", "c", "b", "d"]));

//==================================

function addAndRemove(arr) {
  arr.unshift(0);
  arr.pop();
  let result = arr;
  return result;
}
console.log(addAndRemove([10, 20, 30]));

//===============================================================================

function cleanAndJoin(arr) {
  let result = arr.map((v) => v.trim()).join(", ");
  return result;
}
console.log(cleanAndJoin(["  olma", " anor  ", "behi "]));
