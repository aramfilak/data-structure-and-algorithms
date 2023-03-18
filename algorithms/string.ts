/***************************************************************
 >>>>>>>>>>>>>>>>>>>>>>>> String <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ***************************************************************/
/**
 * LeetCode Problem:
 * 49. Group Anagrams
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();
  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    map.set(sortedStr, [...(map.get(sortedStr) ?? []), str]);
  }
  return [...map.values()];
}

/**
 * LeetCode Problem:
 * 459. Repeated Substring Pattern
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function repeatedSubstringPattern(s: string): boolean {
  let subStr = '';
  let index = 0;
  const sLength = s.length;
  while (index < Math.floor(sLength / 2)) {
    subStr += s[index];
    if (subStr.repeat(Math.floor(sLength / subStr.length)) === s) {
      return true;
    }
    index++;
  }
  return false;

}

/**
 * LeetCode Problem:
 * 2243. Calculate Digit Sum of a String
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function digitSum(inputString: string, groupSize: number): string {
  while (inputString.length > groupSize) {
    let count = 0;
    let groupsSum = 0;
    let outputString = '';
    for (let i = 0; i < inputString.length; i++) {
      groupsSum += Number(inputString[i]);
      count++;
      if (count === groupSize) {
        outputString += `${groupsSum}`;
        groupsSum = 0;
        count = 0;
      } else if (i + groupSize > inputString.length && i == inputString.length - 1) {
        outputString += `${groupsSum}`;
      }
    }
    inputString = outputString;
  }
  return inputString;
}


/**
 * LeetCode Problem:
 * 2319. 242. Valid Anagram
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let sLetters = new Map();
  let tLetters = new Map();
  for (let i = 0; i < s.length; i++) {
    sLetters.set(s[i], (sLetters.get(s[i]) || 0) + 1);
    tLetters.set(t[i], (tLetters.get(t[i]) || 0) + 1);
  }
  let iterator = sLetters.keys();
  for (let i = 0; i < sLetters.size; i++) {
    let letter = iterator.next().value;
    if (sLetters.get(letter) !== tLetters.get(letter)) return false;
  }
  return true;
}

/**
 * LeetCode Problem:
 * 58. Length of Last Word
 * Time Complexity: O(n)
 * Space Complexity: (1)
 */
function lengthOfLastWord(s: string): number {
  let isLetter = false;
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let cur = s[i];
    if (cur !== ' ') isLetter = true;
    if (cur !== ' ' && isLetter) count++;
    else if (count) break;
  }
  return count;
}
