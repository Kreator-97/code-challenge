
/**
 * CHALLENGE: Divide without the division operator
 * 
 * Implementing a function called divide.
 * That function must divide parameter "a" between parameter "b" ( a / b )
 * 
 * Constraints
 * ⛔ You cannot use the "/" operator"
 * 👀 It should receive 2 arguments (a, b)
 * 👀 It always should return a number
 * 👀 all parameter should be optionl
 * 👀 if the result is a decimal number (float), it should to contain a precision of at least 2 decimals: (100 / 3 => 3.33)
 */

type Divide = (a?: number, b?: number, config?: { decimalsLimit: number }) => number

// dividing without / operator
export const divide: Divide = (a: number = 0, b: number = 0, config ) => {
  let int = 0
  let float = 0
  let decimals = []
  let hasZeroPoint = false
  let firstIteration = true

  if( a === 0 && b === 0) return 0
  if( a !== 0 && b === 0) return Infinity

  const limit = config?.decimalsLimit || 10
  
  while( a > 0 && decimals.length <= limit ) {
    if( decimals.length === 0 && a >= b ) {
      // if there is decimal and "a" is greater than "b"
      a = a - b
      int++
    } else {
      // if there is not decimals and "a" is greater than "b"

      if( a >= b ) {
        // if "a" is greater or equal than "b"
        a = a - b
        float++
      } else {
        // if "a" is less or equal than to "b"
        a = a * 10

        decimals.push(float)
        float = 0

        if( firstIteration ) {
          hasZeroPoint = true
        }
      }
    }
    firstIteration = false
  }
 
  if( decimals.length > 0 ) {
    // add last count to decimals
    decimals.push(float)
    
    // remove first zero on decimals
    decimals.shift()
 
    if( hasZeroPoint ) {
      const result = Number( '0.' + decimals.join('') )
      return result
    }
    else {
      const result = Number( int + '.' + decimals.join('') )
      return result
    }
  }
 
  // add last count to integers
  return int + float
}
