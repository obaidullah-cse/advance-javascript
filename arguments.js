function add(num1,num2){
    const input = [...arguments];
    console.log(input);
    let sum = 0;
    for(let i=0; i<input.length; i++){
        const elements = input[i];
        sum = sum + elements;
    }
    return sum;
}
const result = add(2,3,5,7);
console.log(result);