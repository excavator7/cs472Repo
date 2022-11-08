function sum(arr){
    return arr.reduce((sum, i) => sum + i);
}

function multiply(arr){
    return arr.reduce((result, i) => result * i, 1);
}

function reverse(str){
    return Array.from(str).reduce((result, s) => s + result + "");
}

function filterLongWords(arr, i) {
    return arr.filter(s => s.length > i);   
}

