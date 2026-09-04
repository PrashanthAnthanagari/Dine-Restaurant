// var name = "Prashanth";
// var name1 = "Mahesh";
// var name2 = "Gopi";
// var name3 = "Anil";
// var name4 = "Akshay";
// console.log(name);
// console.log(name1[0]);
// console.log(name1[1]);
// console.log(name1[2]);
// console.log(name1[3]);
// console.log(name1[4]);
// console.log(name1[5]);

// for (let i=0;i<=name.length;i++) 
// {
//     for (let j=0;j<=name.length;j++){
//     console.log(name[i][j]);
//     }
// }

// var arr = ["prashanth","Gopi","Sai"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])
// console.log(arr[1][3])


// for (let i=0;i<arr.length;i++){
//     for (let j=0;j<arr[i].length;j++){
//         console.log("print each letter in the array");
//         console.log(arr[i][j]);
//     }
// }

// var names = ["Prash","Anil","Mahesh","Akshay","Gopi"]
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// push function

// var arr = ["Prash","Anil","Mahesh","Akshay","Gopi"]
// arr.push("Shiva");
// console.log(arr);

// pop function
// var arr = ["Prash","Anil","Mahesh","Akshay","Gopi"]
// arr.pop();
// console.log(arr);

// update the array

// var arr = ["Prash", "Anil", "Mahesh", "Akshay", "Gopi"]
// arr[1]="Vijay";
// console.log(arr);

// // NUMBERS IS EVEN OR ODD IN THE ARRAY

// var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for(let i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         console.log(num[i]);
//         console.log("Number is even");
//     }
//     else{
//          console.log(num[i]);
//           console.log("Number is odd");
//     }
// }


// 1: COUNT THE CHARACTER IN THE STRINGS USING THE LOOP

let str = "javascript"
let count = 0
for (let i = 0; i < str.length; i++) {
    count++;
}
console.log(count);

// 2: PRINT EACH CHARTER IN THE STRING

let str1 = "hello"

for (let i = 0; i < str1.length; i++) {

    console.log(str1[i]);

}

// 3: COUNT THE VOWELS IN THE WORD

let str2 = "javascript";

count = 0;

for (let i = 0; i < str2.length; i++) {

    if (str2[i] === 'a' ||
        str2[i] === 'e' ||
        str2[i] === 'i' ||
        str2[i] === 'o' ||
        str2[i] === 'u'
    )
        count++

}
console.log(count);

// 4: COUNT THE VOWELS AND CONSONANTS 


let str3 = "developer"
count = 0;
count1 = 0;

for (let i = 0; i < str3.length; i++) {

    if (str2[i] === 'a' ||
        str2[i] === 'e' ||
        str2[i] === 'i' ||
        str2[i] === 'o' ||
        str2[i] === 'u'
    ) {

        count++
    }
    else {
        count1++
    }
}
console.log("Vowel count is:", count);
console.log("consonants count is:", count1);

// 5: COUNT THE SPECIFIC CHARACTER

let str4 = "banana"
count = 0

for (let i = 0; i < str4.length; i++) {
    if (str4[i] == 'a') {
        count++;
    }
}
console.log("letter a count is:", count);

// 6: REVERSE THE WORD

let str5 = "hello" // olleh
let reversestr = ""

for (let i = str5.length - 1; i >= 0; i--) {

    reversestr = reversestr + str5[i]
}
console.log(reversestr);

// 7: CHECK PALINDROME

let str6 = "madam"
let str7 = ""

for (let i = str6.length - 1; i >= 0; i--) {
    str7 = str7 + str6[i]
    if (str6 == str7) {
        console.log(" madam is palindrome:", str7)
    }
}

// 8: COUNT THE UPPERCASE AND LOWERCASE LETTERS

let str8 = "JavaScript"

uppercasecount = 0
lowercasecount = 0

for (let i = 0; i < str8.length; i++) {
    if (str8[i] >= 'A' && str8[i] <= 'Z') {
        uppercasecount++;
    }
    else if (str8[i] >= 'a' && str8[i] <= 'z') {
        lowercasecount++;
    }
}
console.log("uppercase count is:", uppercasecount);
console.log("lowercase count is:", lowercasecount);

// 9: FIND THE FIRST VOWEL

let str9 = "frontend";

let vowel = "";

let found = false;

for (let i = 0; i < str9.length; i++) {

    if (str9[i] == 'a' ||
        str9[i] == 'e' ||
        str9[i] == 'i' ||
        str9[i] == 'o' ||
        str9[i] == 'u'
    ) {

        vowel = str9[i];

        found = true;

        break;
    }
}

if (found) {
    console.log("the word contains the vowel:", vowel);
} else {
    console.log("No Vowel found")
}

// 10: FIND THE DUPLICATE CHARACTERS

let str10 = "programming";

for (let i = 0; i < str10.length; i++) {

    for (let j = i + 1; j < str10.length; j++) {

        if (str10[i] === str10[j]) {

            console.log(str10[i]);

            break;

        }

    }
}

/////////////////////////////////////////////   ARRAYS    /////////////////////////////////////////////////////////////

// 1: PRINT ALL THE NUMBERS

let numbers = [10, 20, 30, 40, 50]

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);
}

// 2: FIND THE SUM OF ARRAY

let numbers1 = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < numbers1.length; i++) {

    sum = sum + numbers1[i];

}
console.log("Sum of the Numbers:", sum);

// 3: COUNT EVEN AND ODD NUMBERS

let numbers2 = [10, 15, 20, 25, 30, 33];

let evencount = 0;

let oddcount = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 == 0) {

        evencount++;
    }
    else {

        oddcount++;
    }
}
console.log("Even count is:", evencount);
console.log("Odd count is:", oddcount);

// 4: PRINT THE NUMBERS GREATER THAN 20

let numbers3 = [10, 25, 12, 40, 18, 50];

let num = [];

for (let i = 0; i < numbers3.length; i++) {

    if (numbers3[i] > 20) {

        num.push(numbers3[i]);
    }

}
console.log("Numbers greater than 20 is:", num);


// 5: COUNT POSITIVE, NEGATIVE, AND ZERO VALUES

let numbers4 = [10, -5, 0, 20, -3, 0, 15];

let zeros = 0;

let positive = 0;

let negative = 0;

for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i] > 0) {
        positive++;
    }
    else if (numbers4[i] < 0) {

        negative++;
    }
    else {
        zeros++;
    }
}

console.log("Positive number count is:", positive);

console.log("Negative number count is:", negative);

console.log("Zero number count is:", zeros);

// 6: FIND THE LARGEST NUMBER

let numbers5 = [10, 45, 23, 89, 12, 67];

for (let i = 0; i < numbers5.length; i++) {

    for (let j = i + 1; j < numbers5.length; j++) {

        if (numbers5[i] > numbers5[j]) {

            let temp = numbers5[i];

            numbers5[i] = numbers5[j];

            numbers5[j] = temp;

        }

    }

}
console.log("Largest number is:", numbers5[numbers5.length - 1]);

// 7: FIND THE SMALLEST NUMBER

let numbers6 = [10, 45, 3, 89, 12, 67];

for (let i = 0; i < numbers6.length; i++) {

    for (let j = i + 1; j < numbers6.length; j++) {

        if (numbers6[i] < numbers6[j]) {

            let temp = numbers6[i];

            numbers6[i] = numbers6[j];

            numbers6[j] = temp;

        }

    }
}

console.log("Largest number is:", numbers6[numbers6.length - 1]);

// 8: SEARCH FOR THE ELEMENT

let numbers7 = [10, 20, 30, 40, 50];

let num7 = 30;

for (let i = 0; i < numbers7.length; i++) {

    if (numbers7[i] == 30) {

        num7 = numbers7[i];

        break;
    }
}

console.log("Number is found:", num7);


// 9: REVERSE THE ARRAY

let numbers8 = [10, 20, 30, 40, 50];

let revesearray = [];

for (let j = numbers8.length - 1; j >= 0; j--) {

    revesearray.push(numbers8[j]);

}
console.log("Reversed array is:", revesearray);

// 10: FIND THE DUPLICATE NUMBERS

let numbers9 = [10, 20, 30, 20, 40, 10, 50];

let duplicatearray = [];


for (let i = 0; i < numbers9.length; i++) {

    for (let j = i + 1; j < numbers9.length; j++) {

        if (numbers9[i] == numbers9[j]) {

            duplicatearray.push(numbers9[i]);

        }
    }
}

console.log("The duplicate numbers is:", duplicatearray);