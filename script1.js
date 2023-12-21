// Arrow Function

// Print odd numbers in an array
oddNum = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
};

// Convert all the strings to title caps in a string array
titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

// Sum of all numbers in an array
sum = (array) => {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

// Return all the prime numbers in an array
primeNum = (numArray) => {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
};

// Return all the palindromes in an array
Palindrome = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let result = isPalindrome(arr[i]);
    if (result == false) return false;
  }
  return true;
};
