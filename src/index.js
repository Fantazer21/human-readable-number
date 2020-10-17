module.exports = function toReadable (number) {
let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '',"twenty",'thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  var numString = number.toString();

  if (number < 0)  {return 'Negative numbers are not supported.';
} else if (number === 0) {return 'zero';
} else if(number < 20) { return ones[number].trimRight();
//case of 21 to 99
}else if (numString.length === 2 && number > 19) 
	{return (tens[numString[0]] + ' ' + ones[numString[1]]).trimRight(); 
	//case of 100
} else if (numString[1] === '0' && numString[2] === '0') {
      return (ones[numString[0]] + ' hundred').trimRight();
     // case of 101 to 999
} else if (numString.length === 3 && numString[1] === '0')
  {return (ones[numString[0]]  + ' hundred ' + ones[numString[2]]).trimRight();
}  else if (numString.length === 3 && numString[1] == '1')
  {return (ones[numString[0]]  + ' hundred ' + ones[numString[1] + numString[2]]).trimRight();
}

else 
  {return (ones[numString[0]] + ' hundred ' + tens[numString[1]] + " "+ ones[numString[2]]).trimRight();}
}
  
  
 

 

