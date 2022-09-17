class PalindromeChecker {
  isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
}

export default PalindromeChecker;
