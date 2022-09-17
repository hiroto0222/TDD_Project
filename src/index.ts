class PalindromeChecker {
  isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str.toLowerCase() === reversed.toLowerCase();
  }
}

export default PalindromeChecker;
