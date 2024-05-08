import { describe, expect, test } from 'vitest'
import { formatDate } from '../utils/utils.js'

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