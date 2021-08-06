// TASK1
function arrCopy(arr) {
    return arr.slice()
}

const arr1 = arrCopy([1,2,3]);
console.log(arr1);
const arr2 = arrCopy([1,2,3,[10,20]])
console.log(arr2)



// TASK2
function arrToString(arr) {
    return arr.slice().join()
}
const arr3 = arrToString([1,2,3]);
console.log(typeof arr3, arr3)
const arr4 = arrToString([10,200,3333]);
console.log(typeof arr4, arr4)



// TASK3
let array1
function getLength(arr) {
    array1 = [];
    arr.forEach(element => {
        array1.push(element.length)
    });
}
const arr5 = getLength(['Ivan','Pavlo','Ira'])
console.log(array1);
const arr6 = getLength(['Oleksiy','Andriana'])
console.log(array1)



// TASK4
function removeDuplicates(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
}
const arr7 = removeDuplicates(['html','css','html','js'])
console.log(arr7)
const arr8 = removeDuplicates(["html","css","js","html","js","python","js","scss"])
console.log(arr8)