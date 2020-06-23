// Chapter 21 - 25

// Question 1

// var first_name = prompt ("Please enter your first name")
// var last_name = prompt ("Please enter your last name")

// var full_name = first_name+last_name
// alert ("Hello Mr./Mrs. "+full_name)

// Question 2

// var fav_phone = prompt("Please enter your favourite phone")
// var numChars = fav_phone.length
// document.write("My favourite phone is : " + fav_phone + "<br>Length of string: " + numChars)

// Question 3

// var n_char = ("Pakistani").indexOf("n")
// document.write ("String: Pakistani<br>Index of 'n': " + n_char)

// Question 4

// var l_char_last = ("Hello World").lastIndexOf("l")
// document.write("String: Hello World<br>Last index of 'l': " + l_char_last)

// Question 5

// var third_char = ("Pakistani").charAt(3)
// document.write ("String: Pakistani<br>Index of 3: " + third_char)

// Question 6

// var first_name = prompt("Please enter your first name")
// var last_name = prompt("Please enter your last name")
// var full_name = first_name.concat(last_name);
// alert("Hello Mr./Mrs. " + full_name)

// Question 7

// var city = "Hyderabad"
// var new_city = city.replace ("Hyder","Islam")
// document.write("City: Hyderabad <br>After replacement: " + new_city)

// Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var new_message = message.replace(/and/g, "&")
// document.write(new_message)

// Question 9

// var value = 472
// document.write("Value: " + value.toString() + "<br>Type: String<br>Value:" + value + "<br>Type: number")

// Question 10

// var user_name = prompt("Please enter the input")
// user_name_uppercase = user_name.toUpperCase()
// document.write("User input: " + user_name + "<br>Upper case: " + user_name_uppercase)

// Question 11
// var str = "hamza"
// var splitStr = str.split('');
// var firstAlpha = splitStr[0].toUpperCase();
// var remainingWord = splitStr.slice(1).join('');
// console.log(firstAlpha+remainingWord);

// change

// Question 12

// var num = 35.36
// var strNum =num.toString();
// console.log(strNum.replace('.',''));

// change

// Question 13

// var userInput = "abcd123"
// var splitUserInput = userInput.split('');
// console.log(splitUserInput);
// if(splitUserInput.find(el => el='@')) {
//     console.log('correct');
// } else {
//     console.log('false');
// }

// change

// Question 15

// const checkNumber = /[0-9]/g
// const checkAlpha = /[A-Za-z0-9]/g
// const password = prompt("Please Enter Your Password")
// const splitPass = password.split('')
// if (!checkNumber.test(splitPass[1]) && checkAlpha.test(password) && splitPass.length >= 6) {
//     alert("Valid Password")
// } else {
//     alert("Invalid Password")
// }

// Question 16

// var university = "University of Karachi"
// var splituni = university.split('')
// for (var i = 0; i < splituni.length; i++) {
//     document.write(splituni[i]+"<br>")
// }

// Question 17

// var user_input = prompt("Please enter your input")
// var last_char = user_input.charAt(user_input.length - 1)
// document.write("User input: " + user_input + "<br>Last character of input: " + last_char)

// Question 18

// function search_word(text, word) {

//     var x = 0, y = 0;

//     for (i = 0; i < text.length; i++) {
//         if (text[i] == word[0]) {
//             for (j = i; j < i + word.length; j++) {
//                 if (text[j] == word[j - i]) {
//                     y++;
//                 }
//                 if (y == word.length) {
//                     x++;
//                 }
//             }
//             y = 0;
//         }
//     }
//     return "'" + word + "' was found " + x + " times.";
// }

// console.log(search_word('The quick brown fox jumps over the lazy dog', 'the'));
// console.log(search_word('The quick brown fox jumps over the lazy dog', 'The'));




// Chapter 26 - 30

// Question 1

// var input = parseInt(prompt("Please enter an integer"))
// var adding_decimal_value = input + 0.45214
// var roundoff = Math.round(adding_decimal_value)
// var floor = Math.floor(adding_decimal_value)
// var ceil = Math.ceil(adding_decimal_value)
// document.write("number: " + adding_decimal_value + "<br>round off value: " + roundoff + "<br>floor value: " + floor + "<br>ceil value: " + ceil)

// Question 2

// var input = parseFloat(prompt("Please enter a negative decimal number"))
// if (input >= 0) {
//     alert("Enter a negative decimal number")
// } else {
//     var roundoff = Math.round(input)
//     var floor = Math.floor(input)
//     var ceil = Math.ceil(input)
//     document.write("number:" + input + "<br>round off value: " + roundoff + "<br>floor: " + floor + "<br>cei: " + ceil)
// }

// Question 3

// var value = parseInt(prompt("Please enter a value"))
// var absolute = Math.abs(value)
// document.write("The absolute value of " + value + " " + "is " + absolute)

// Question 4

// var num = Math.ceil(Math.random() * 6)
// document.write("random dice value: " + num)

// Question 5

// var num = Math.ceil(Math.random() * 2)
// if (num === 1) {
//     document.write(num + "<br>random coin value: Heads")
// } else {
//     document.write(num + "<br>random coin value: Tails")
// }

// Question 6

// var num = Math.ceil(Math.random() * 100)
// document.write("random number between 1 and 100: " + num)

// Question 7

// var weight_input = parseInt(prompt("Enter your weight in kilograms"))
// document.write("The weightof user is " + weight_input + " " + "kilograms")

// Question 8

// var secret_number = Math.ceil(Math.random() * 10)
// var input_num = parseInt(prompt("Enter a number between 1 and 10"))
// if (secret_number === input_num) {
//     alert("Congratulations!")
// } else {
//     alert("Try again!")
// }


// Chapter 31 - 34

// Question 1

// var date = new Date()
// document.write(date)

// Question 2

// var Month

// switch (new Date().getMonth()) {
//     case 0:
//         Month = "January";
//         break;
//     case 1:
//         Month = "February ";
//         break;
//     case 2:
//         Month = "March";
//         break;
//     case 3:
//         Month = "April ";
//         break;
//     case 4:
//         Month = "May ";
//         break;
//     case 5:
//         Month = "June ";
//         break;
//     case 6:
//         Month = "July ";
//         break;
//     case 7:
//         Month = "August ";
//         break;
//     case 8:
//         Month = "September ";
//         break;
//     case 9:
//         Month = "October ";
//         break;
//     case 10:
//         Month = "November ";
//         break;
//     case 11:
//         Month = "December ";
//         break;
// }

// alert("Current month: " + Month)

// Question 3

// var day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }
// alert("Today is " + day)

// Question 4

// var day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }

// if (day == "Saturday" || day == "Sunday") {
//     alert("It's Fun day")
// }

// Question 5

// var date = new Date()
// var daysofmonth = date.getDate()
// if (daysofmonth <= 15) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// }

// Question 6

// var date = new Date()
// var datesince1970 = date.getTime()
// var datesince1970_minutes = datesince1970 / 60000
// document.write("Current Date: " + date + "<br>Elapsed milliseconds since January 1, 1970: " + datesince1970 + "<br>Elapsed minutes since January 1, 1970: " + datesince1970_minutes)

// Question 7

// var date = new Date().getHours()
// if (date >=12){
//     alert("It is PM")
// } else{
//     alert("It is AM")
// }

// Question 8

// var laterdate = new Date("Dec 31, 2020")
// console.log(laterdate)

// Question 9

// var todaydate = new Date().getTime()
// var Ramadan_date = new Date("April 23,2020").getTime()
// var days_passed_ramadan = ((todaydate - Ramadan_date) / 86400000)
// var days_passed_ramadan_roundoff = Math.floor(days_passed_ramadan)
// alert(days_passed_ramadan_roundoff+" "+ "days have passed since 1st Ramadan, 2020")

// Question 10

// var today_date = new Date()
// var today = new Date().getTime()
// var beginningof2015 = new Date("January 1,2015").getTime()
// var seconds_passed_since_2015 = (today - beginningof2015) / 1000
// var seconds_passed_since_2015_roundoff = Math.round(seconds_passed_since_2015)
// document.write("On reference date " + today_date + ", " + seconds_passed_since_2015_roundoff + " " + "seconds had passed since beginning of 2015")
// console.log(seconds_passed_since_2015_roundoff)

// Question 11

// var today = new Date()
// var onehourago = new Date().setHours(1)
// var aaaa = new Date() - onehourago
// console.log(aaaa)

// Problem

// Question 12

// Question 13

// var age = parseInt(prompt("What is your age?"))
// var today_year = new Date().getFullYear()
// var birth_year = today_year - age
// document.write("Your age is " + age + "<br>Your birth year is " + birth_year)

// Question 14

// var customer_name = prompt("What is your name?")
// var month_name = function (month) {
//     mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     return mlist[month.getMonth()]
// }
// var units = parseInt(prompt("How many units did you use?"))
// var charges_per_unit = 16

// var net_amount = units * charges_per_unit
// var late_fees = 350
// var net_amount_late = net_amount + 350

// document.write("<h1>K-Electric Bill</h1><br><br>Customer Name: <b>" + customer_name + "</b><br>Month: <b>" + month_name(new Date()) + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + charges_per_unit + "</b><br><br>Net Amount Payable (within Due Date): <b>" + net_amount + "</b><br>Late payment surcharges: <b>" + late_fees + "</b><br>Gross Amount Payable (after Due Date): <b>" + net_amount_late + "</b>")



// Chapter 35 - 38

// Question 1

// function tellDate() {
//     var today =new Date()
//     document.write(today)
// }

// tellDate()

// Question 2

// function name() {
//     var name_input = prompt("Please enter your name")
//     alert("Hello and Welcome to JS Land, Mr./Mrs. " + name_input)
// }

// name()

// Question 3

// function addition() {
//     var x = parseInt(prompt("Please enter the first value"))
//     var y = parseInt(prompt("Please enter the second value"))
//     var sum = x + y
//     alert("The sum of " + x + " " + "and " + y + " " + "is " + sum)
// }

// addition()

// Question 4

// function calculator() {
//     var num1 = parseInt(prompt("Please enter the first number"))
//     var sign = prompt("Please enter the sign")
//     var num2 = parseInt(prompt("Please enter the second number"))

//     if (sign === "+") {
//         result = num1 + num2
//     } else if (sign === "-") {
//         result = num1 - num2
//     } else if (sign === "*") {
//         result = num1 * num2
//     } else if (sign === "/") {
//         result = num1 / num2
//     } else if (sign === "%") {
//         result = num1 % num2
//     }

//     alert(num1 + sign + num2 + "=" + result)
// }

// calculator()

// Question 5

// function square() {
//     var argument = parseInt(prompt("Give a value"))
//     var sqr = argument*argument
//     alert(sqr)
// }

// square()

// Question 6

// function factorial(num) {
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorial(num - 1));
//     }
// }

// alert(factorial(3));

// Question 7

// var num1 = parseInt(prompt("Enter first number"))
// var num2 = parseInt(prompt("Enter second number"))

// function counting() {

//     if (num2 < num1) {
//         var count = num1 + 1
//         counting()
//     }
//     alert(num1 + count + num2)
// }

// counting()
// problem


// Question 9

// With values

// function Rectang() {
//     var width = 20
//     var height = 10
//     var area = width*height
//     alert("The area of rectangle is "+area)
// }

// Rectang()

// With variables

// function Rectang() {
//     var width = parseInt(prompt("Enter the width of the rectangle"))
//     var height = parseInt(prompt("Enter the height of the rectangle"))
//     var area = width * height
//     alert("The area of rectangle is " + area)
// }

// Rectang()

// Question 10

// function palindrome() {
//     var input = prompt("Please enter a word")
//     var input_split = input.split('')
//     var reverse_input = input_split.reverse()
//     var reverse_input_join = reverse_input.join('')
//     if (input == reverse_input_join) {
//         alert("The word is a palindrome")
//     } else {
//         alert("The word is a string")
//     }
// }

// palindrome()

// Question 11


// function capital_letter(string) {

//     string = string.split(" ");

//     for (var i = 0; i < string.length; i++) {
//         string[i] = string[i][0].toUpperCase() + string[i].substr(1);
//     }

//     return string.join(" ");
// }

// console.log(capital_letter("the quick brown fox"));

// Question 12

// function Findlongestword(string) {

//     string = string.split(' ')
//     var longestwordcount = 0
//     var longestword

//     for (var i = 0; i < string.length; i++) {
//         if (string[i].length > longestwordcount) {
//             longestwordcount = string[i].length
//             longestword = string[i]
//         }
//     }
//     return longestword
// }

// console.log(Findlongestword("Web Development Tutorial"))

// Question 13


// function numberofoccurrences(a, b) {

//     var c = 0
//     a = a.split('')
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] == b) {
//             c = c + 1
//         }
//     }


//     return c
// }

// console.log(numberofoccurrences("JSResourceS.com", "o"))


// Question 14

// function calcCircumference() {
//     var radius = prompt("Enter the radius of the circle")
//     var cicumference = 2 * (22 / 7) * radius
//     alert("The circumference is " + cicumference)
// }

// calcCircumference()

// function calcArea() {
//     var radius = prompt("Enter the radius of the circle")
//     var area = (22 / 7) * (radius * radius)
//     alert("The area is " + area)
// }

// calcArea()