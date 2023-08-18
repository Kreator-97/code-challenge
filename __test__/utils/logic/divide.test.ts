import { test, expect, describe } from 'vitest'
import { divide } from '@/utils/logic/divide'

describe('tests on divide function', () => {
  test('divide() should return zero when it is called with no arguments', () => {
    const result = divide()

    expect(result).toBe(0)
    expect(typeof result).toBe('number')
  })

  test('divide(1) should return Infinity if only we passed one argument', () => {

  })

  test('divide(100,1) should be 100', () => {

  })

  test('divide(9,3) should return 3', () => {

  })
  
  test('divide(25,5) should return 5', () => {

  })

  test('divide(81,9) should be 9', () => {

  })

  test('divide(500,25) should 20', () => {

  })

  test('divide(2,4) should be 0.5 (float)', () => {

  })

  test('divide(100, 3) should be 0.33 (float)', () => {

  })

  test('divide(9, 16) should be 0.5625 (float)', () => {

  })
})
