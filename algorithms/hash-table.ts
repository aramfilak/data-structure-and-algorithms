/**
 * LeetCode Problem (Easy):
 * 118. Pascal's Triangle
 * Time Complexity: O(N∗M)
 * Space Complexity:O(N∗M)
 *
 */
function commonChars(words: string[]): string[] {
  const firstWordChars = words[0].split("");

  if (words.length === 1) {
    return firstWordChars;
  }

  const mapsOfEachWordChars: Array<Map<string, number>> = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordMap = new Map<string, number>();
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      wordMap.set(char, (wordMap.get(char) || 0) + 1);
    }
    mapsOfEachWordChars.push(wordMap);
  }

  const commonChars: string[] = [];

  firstWordChars.forEach((char) => {
    let isSharedChar = true;

    for (let i = 0; i < mapsOfEachWordChars.length; i++) {
      const map = mapsOfEachWordChars[i];
      if (map.get(char)! > 0) {
        map.set(char, map.get(char) - 1);
      } else {
        isSharedChar = false;
        break;
      }
    }

    if (isSharedChar) {
      commonChars.push(char);
    }
  });

  return commonChars;
}
