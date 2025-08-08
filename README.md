# Day 18 – Palindrome Checker (21-Day DSA Challenge)

## 📌 Problem Statement
Check whether a given string is a **palindrome** or not.

A **palindrome** is a word, phrase, or sequence that reads the same backward as forward.

**Examples:**
- `madam` → Palindrome ✅
- `racecar` → Palindrome ✅
- `hello` → Not a palindrome ❌

---

## 🛠️ Approaches Used

### **1️⃣ Case 1 – Using Built-in Methods**
**Logic:**
1. Convert the string into an array using `split("")`
2. Reverse the array using `reverse()`
3. Join it back into a string with `join("")`
4. Compare the reversed string with the original

**Code:**
```javascript
function isPalindrome1(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome1("madam")); // true
console.log(isPalindrome1("hello")); // false


---

2️⃣ Case 2 – Two-Pointer Approach

Logic:

1. Initialize two pointers:

left at the start of the string

right at the end of the string



2. Compare characters at both pointers


3. If any mismatch is found → Not a palindrome


4. Move both pointers towards the center until they meet



Code:

function isPalindrome2(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome2("racecar")); // true
console.log(isPalindrome2("world"));   // false


---

💡 Key Learnings

Built-in methods make the code shorter but use extra space.

Two-pointer approach is more efficient in terms of space complexity.

Always explore multiple approaches to deepen problem-solving skills.



---

📅 Challenge Progress

Day 18 of 21 – Palindrome Checker completed ✅


---

🔗 Connect with Me

LinkedIn : https://www.linkedin.com/in/kosar-ansari-9799a0251 | GitHub : KosarAnsari https://share.google/xI1VeO6CIdR3yxbQe
