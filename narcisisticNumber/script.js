function narcissistic(value) {
let arr = [...value+'']
let NumberArr =[];

for (i=0; i<=arr.length-1;i++){
    let digit = Number(arr[i])
    let power = arr.length;
    let number = Math.pow(digit,power)
    NumberArr.push(number)
}
if (NumberArr.reduce((a, b) => a + b, 0) === value){
    console.log(`${value} is narcissistic`)
    return true;
} else {
    console.log(`${value} is not narcissistic`)
    return false;
}
}

