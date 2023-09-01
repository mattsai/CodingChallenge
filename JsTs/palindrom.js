function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function palindromeIndex(s) {
    // if (s === s.split('').reverse().join('')) {
    //     return -1;
    // }
    
    let left = 0;
    let right = s.length - 1;
    let index = -1;
    
    while (left < right) {
        //s.charAt(0)
        if (s[left] !== s[right]) {
            if (isPalindrome(s.substring(left + 1, right + 1))) {
                return left;
            } else if (isPalindrome(s.substring(left, right))) {
                return right;
            } else {
                return -1;
            }
        }
        left++;
        right--;
    }
    
    return index;
}