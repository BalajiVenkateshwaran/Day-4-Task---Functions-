// A. Print odd numbers in an array
// Anonymous Function
var newArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
};
newArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

// IIFE
(function newArray(e) {
  for (var i = 0; i < e.length; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


//B.Convert all the strings to title caps in a string array
// Anonymous Function
var newData = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
newData(["HELLO WORLD!"]);

// IIFE
(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})("GUVI ZEN CLASS FSD");


//  C. Sum of all numbers in an array
//  Anonymous Function
var tempData = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

//IIFE
var arrayData = function (...data) {
  var temp = 0;
  for (i = 0; i < data.length; i++) {
    temp = temp + data[i];
  }
  return temp;
};


//D.Return all prime number in an array
// Anonymous Function
var tempData = arrData([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);
var a = function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
};

//IIFE
var arrData = function (e) {
  for (i = 2; i < e.length; i++) {
    if (i % 1 == 0 || i % i == 0) {
      console.log(i);
    }
  }
};
arrData([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);


//E. Return all the palindromes in an array
// Anonymous Function
var arr = function (arr, n) {
  for (let i = 0; i < n; i++) {
    let result = isPalindrome(arr[i]);
    if (result == false) return false;
  }
  return true;
};

//IIFE
(  function (arr, n)
        {
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)


//F. Return median of two sorted arrays of the same size
// Anonymous Function
const median = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
}
let a = [0,2,3,5,9];
let b = [1,4];
console.log(median(a,b));

//G. Remove duplicates from an array
// Anonymous Function
var dup = function (array) {
  let dupData = [...new Set(array)];
  console.log(dupData);
};

//IIFE
var arrData = function (e) {
  console.log([...new Set(e)]);
};
arrData([
  "Balaji",
  "Venkateshwaran",
  "Chennai",
  "FSD",
  "Frontend",
  "Backend",
  "Chennai",
  22,
  30,
  "Balaji",
  "Chennai",
  30,
  25,
  20,
]);


//H. Rotate an array by k times
// Anonymous Function
var array = function(array , k){
  k = k % a.length;
    if(k < 0){
      k += a.length;
    }

    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
  }

  //IIFE
  (function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
