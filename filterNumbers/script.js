// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


function filter_list(l){
    return l.filter(x=>typeof x == "number");
}

const arr1 = [1,'code wars', 2,'a','b',3]
const arr2 = [1,'a','b',0,15]
const arr3 = [1,2,'aasf','1','123',123,'code wars','4934382', 3712]


console.log(filter_list(arr1))
console.log(filter_list(arr2))
console.log(filter_list(arr3))