String.prototype.filter = function(arr){
    return this.split(' ').filter(o => arr.indexOf(o) < 0).join(' ');
}

Array.prototype.bubbleSort = function(){
    let arr = this;
    for (let i = 0; i < arr.length-1; i++) {
        for (let k = 0; k < arr.length-i-1; k++) {
            if(arr[k+1]<arr[k]){
                swap(arr, k+1, k);
            }
        }        
    }
    return arr;
}

function swap(arr, x, y){
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return this.name + ' is now teaching ' + subject;
}

let micha = new Teacher();
micha.initialize("Micha", 30);
micha.teach("History");



