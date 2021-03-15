module.exports = function toReadable(n) {
  if (n == 0) {
    return 'zero';
  }
  if (n > 0 && n < 20) {
    return oneTo20(n)
  } else if (n > 19 && n < 100) {
    let second = Math.floor(n / 10) * 10;
    let third = n % 10;
    if (third != 0) {
      second = twentyToNinety(second);
      third = oneTo20(third);
      let result = second + ' ' + third;
      return result;
    } else {
      second = twentyToNinety(second);
      let result = second
      return result;
    }
    
  } else if (n > 99 && n < 1000) {
      let first = Math.floor(n / 100);
      let second = n - first * 100;
      if (second != 0) {
        first = oneTo20(first);
        if (second < 20) {
          second = oneTo20(second);
          let result = first + ' hundred ' + second;
          return result;
        }
        let third = second % 10;
        if (third != 0) {
          second = Math.floor(second / 10) * 10
          second = twentyToNinety(second);
          third = oneTo20(third);
          let result = first + ' hundred ' + second + ' ' + third;
          return result;
        } else {
          second = twentyToNinety(second);
          let result = first + ' hundred ' + second;
          return result;
        }
        
      } else {
        let result = oneTo20(first) + ' hundred'
        return result;
      }
    
    
  }
}


function oneTo20(n) {
  if (n == 1) {
    return 'one'
  } else if (n == 2) {
    return 'two'
  } else if (n == 3) {
    return 'three'
  } else if (n == 4) {
    return 'four'
  } else if (n == 5) {
    return 'five'
  } else if (n == 6) {
    return 'six'
  } else if (n == 7) {
    return 'seven'
  } else if (n == 8) {
    return 'eight'
  } else if (n == 9) {
    return 'nine'
  } else if (n == 10) {
    return 'ten'
  } else if (n == 11) {
    return 'eleven'
  } else if (n == 12) {
    return 'twelve'
  } else if (n == 13) {
    return 'thirteen'
  } else if (n == 14) {
    return 'fourteen'
  } else if (n == 15) {
    return 'fifteen'
  } else if (n == 16) {
    return 'sixteen'
  } else if (n == 17) {
    return 'seventeen'
  } else if (n == 18) {
    return 'eighteen'
  } else if (n == 19) {
    return 'nineteen'
  }
}
      



function twentyToNinety(n) {

      if (n == 20) {
        return 'twenty'
      } else if (n == 30) {
        return 'thirty'
      } else if (n == 40) {
        return 'forty'
      } else if (n == 50) {
        return 'fifty'
      } else if (n == 60) {
        return 'sixty'
      } else if (n == 70) {
        return 'seventy'
      } else if (n == 80) {
        return 'eighty'
      } else if (n == 90) {
        return 'ninety'
      }
} 
