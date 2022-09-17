import PalindromeChecker from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('exists', () => {
    expect(palindromeChecker).toBeDefined();
  });

  it('should be able to tell that "mom" is a palindrome', () => {
    expect(palindromeChecker.isPalindrome('mom')).toBeTruthy();
  });

  it('should be able to tell that "bill" is not a palindrome', () => {
    expect(palindromeChecker.isPalindrome('bill')).toBeFalsy();
  });

  it('should detect palindrome regardless of casing', () => {
    expect(palindromeChecker.isPalindrome('Mom')).toBeTruthy();
  });
});
