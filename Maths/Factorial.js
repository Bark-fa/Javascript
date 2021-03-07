/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/factorial_python.py

    This script will find the factorial of a number provided by the user.

    More about factorials:
        https://en.wikipedia.org/wiki/factorial
*/

'use strict'

const calcFactorial = (num) => {
    
switch (true) {
    case num == 0:
        return 'The factorial of 0 is 1.'
        break;
    case num < 0:
        return 'Sorry, factorial does not exist for negative numbers.'
        break;
    case !num:
        return 'Sorry, factorial does not exist for null or undefined numbers.'
        break;
}
  if (num > 0) {
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
          factorial *= i;
      }
      return `The factorial of ${num} is ${factorial}`
  }
}

export { calcFactorial }
