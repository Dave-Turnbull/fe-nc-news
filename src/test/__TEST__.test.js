import { describe, expect, test } from 'vitest'
import { formatDate } from '../utils/utils.js'
import { testHandleVoteChange } from './testFunctions.js'

describe('formatDate()', () => {
    const dateString = '2020-03-08T20:02:00.000Z'
    test('returns a string', () => {
        const output = formatDate(dateString)
        expect(typeof output).toBe('string')
    })
    test('formats string to date', () => {
        const output = formatDate(dateString)
        expect(output).toBe('20:02, 08/03/2020')
    })
})

describe('testHandleVoteChange()', () => {
    test('adds a vote when votes are 0', () => {
        expect(testHandleVoteChange(1, 0)).toBe(1)
    })
    test('removes a vote when votes are 0', () => {
        expect(testHandleVoteChange(-1, 0)).toBe(-1)
    })
    test('cancels a vote if both arguments are the same', () => {
        expect(testHandleVoteChange(1, 1)).toBe(0)
        expect(testHandleVoteChange(-1, -1)).toBe(0)
    })
})