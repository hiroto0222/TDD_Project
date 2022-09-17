import PalindromeChecker from './index';

describe('palindrome checker', () => {
  it('exists', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker).toBeDefined();
  });

  it('should be able to tell that "mom" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome('mom')).toBeTruthy();
  });

  it('should be able to tell that "bill" is not a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome('bill')).toBeFalsy();
  });
});
