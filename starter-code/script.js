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

var arr = ["prashanth","Gopi","Sai"]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[1][2])
console.log(arr[1][3])


for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){
        console.log("print each letter in the array");
        console.log(arr[i][j]);
    }
}