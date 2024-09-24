function lengthOfLongestSubstring(s) {
  if (s.length === 0) {
    return 0;
  }

  let set = new Set();

  let left = 0;

  let right = 0;

  let max = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);

      right++;

      max = Math.max(max, set.size);
    } else {
      set.delete(s[left]);

      left++;
    }
  }

  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
