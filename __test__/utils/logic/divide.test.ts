import { test, expect, describe } from 'vitest'
import { divide } from '@/utils/logic/divide'

describe('tests on divide function', () => {
  test('divide() should return zero when it is called with no arguments', () => {
    const result = divide()

    expect(result).toBe(0)
    expect(typeof result).toBe('number')
  })

  test('divide(1) should return 0 if only we passed one argument', () => {
    const result = divide(1)
    
    // We assumed that second is 0. Every number divided by 0 should be Infinity
    expect(result).toBe(Infinity)
  })

  test('divide(100,1) should be 100', () => {
    const result = divide(100,1)

    // any number divided by 1 must be the same number
    expect(result).toBe(100)
  })

  test('divide(9,3) should return 3', () => {
    const result = divide(9,3)
    expect(result).toBe(3)
  })
  
  test('divide(25,5) should return 5', () => {
    const result = divide(25,5)
    expect(result).toBe(5)
  })

  test('divide(81,9) should be 9', () => {
    const result = divide(81,9)
    expect(result).toBe(9)
  })

  test('divide(500,25) should 20', () => {
    const result = divide(500,25)
    expect(result).toBe(20)
  })

  test('divide(2,4) should be 0.5 (float)', () => {
    const result = divide(2,4)
    expect(result).toBe(0.5)
  })

  test('divide(100, 3) should be 0.33 (float)', () => {
    const result = divide(100,3, { decimalsLimit: 2 })
    expect(result).toBe(33.33)
  })

  test('divide(9, 16) should be 0.5625 (float)', () => {
    const result = divide(9, 16, { decimalsLimit: 4 })
    expect(result).toBe(0.5625)
  })
})
