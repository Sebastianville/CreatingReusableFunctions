//part 1

const numbers = [10, 5, 8, 1, 3];

function sumArray (arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum)
    return sum
}

function average(arr){
    let average = sumArray(arr) /arr.length
    let result = `the average of the array is ${average}`
    return result
}

console.log(average(numbers));


const string = ['Hello', 'Goodbye', 'Investigation', 'Healthcare']

function longestStrings (str) {
    let newstr = str.sort((a, b) => b.length - a.length);
    return newstr[0]
}

console.log(longestStrings(string))


function stringsLongerThan(str, n){
    let newArray = []
    str.forEach(element => {
        if (element.length > n) {
          newArray.push(element);
        } 
      });
    return newArray
}

console.log(stringsLongerThan(string, 8))


function printEveryNumber(num) {
    for (let i = 0; i < num;  i++ ){
        console.log(i);  
    }
}

printEveryNumber(9)



let dataObject = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


dataObject.sort((a, b) => a.age - b.age);
console.log("Ascending:", dataObject);


const newObject = dataObject.filter(num => num.age > 50 );
console.log(newObject)

const changeJobAndAge = dataObject.map(a => ({
    id: a.id,
    name: a.name,
    job: a.occupation, 
    age: Number(a.age) + 1 
  }));

console.log("this is the change info:" , changeJobAndAge)


const totalAge = changeJobAndAge.reduce((sum, person) => sum + person.age, 0);
console.log("Sum of Ages:", totalAge);


const averageAge = totalAge / changeJobAndAge.length;
console.log("Average Age:", averageAge.toFixed(2));