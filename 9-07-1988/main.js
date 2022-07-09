// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  switch(month) {
    case (month < 4): return 1
    case (month > 3 && month < 7): return 2
    case (month > 6 && month < 10): return 3
    case (month > 9): return 4
  } 

  
}