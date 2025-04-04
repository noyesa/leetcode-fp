import { describe, it, expect } from 'vitest';

/**
 * Merges two non-empty arrays.
 */
const mergeNonEmptyArrays = ([lHead, ...lRest], [rHead, ...rRest]) => [
  lHead,
  rHead,
  ...mergeArrays(lRest, rRest),
];

/**
 * Merges two arrays into one, picking from the left first, then the right.
 * @template T
 * @param {T[]} left - The left
 */
const mergeArrays = (left, right) =>
  // Ensure each array contains at least one value.
  left.length === 0
    ? right
    : right.length === 0
      ? left
      : mergeNonEmptyArrays(left, right);

/**
 * Merges two strings together, alternative between word1 and word2 to choose
 * the next character from at each index.
 * @param {string} word1 - The first string. Chars will appear first.
 * @param {string} word2 - The second string. Chars will appear second.
 * @returns {string} The merged string.
 */
const mergeAlternately = (word1, word2) =>
  mergeArrays(word1.split(''), word2.split('')).join('');

describe('mergeAlternately', () => {
  it('solves example #1', () => {
    const word1 = 'abc';
    const word2 = 'pqr';
    expect(mergeAlternately(word1, word2)).toBe('apbqcr');
  });

  it('solves eample #2', () => {
    const word1 = 'ab';
    const word2 = 'pqrs';
    expect(mergeAlternately(word1, word2)).toBe('apbqrs');
  });

  it('solves example #3', () => {
    const word1 = 'abcd';
    const word2 = 'pq';
    expect(mergeAlternately(word1, word2)).toBe('apbqcd');
  });
});
