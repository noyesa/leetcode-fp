import { describe, it, expect, assert } from 'vitest';

/**
 * Subtracts all its arguments in order.
 * @param {number[]} args - The numbers to subtract.
 * @returns {number} The difference of all the passed arguments.
 */
const subtract = (...args) => args.reduce((a, b) => a - b);

/**
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct
 * positive integers, return the list of integers that are present in each array
 * of nums sorted in ascending order.
 * @param {number[]} nums - The 2D array to find common elements within.
 * @returns An array containing all the common elements in ascending order.
 */
const intersection = (nums) =>
  Array.from(
    nums
      .map((subarray) => new Set(subarray))
      .reduce((prev, next) => next.intersection(prev)),
  ).sort(subtract);

describe('intersection', () => {
  it('solves example #1', () => {
    const nums = [
      [3, 1, 2, 4, 5],
      [1, 2, 3, 4],
      [3, 4, 5, 6],
    ];

    expect(intersection(nums)).toEqual([3, 4]);
  });

  it('solves example #2', () => {
    const nums = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(intersection(nums)).toEqual([]);
  });

  it('solves example #3', () => {
    const nums = [
      [4, 43, 15, 30, 27, 22],
      [15, 30, 43, 27, 10, 4],
    ];

    assert.deepEqual(intersection(nums), [4, 15, 27, 30, 43]);
  });
});
