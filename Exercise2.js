let arr1 = [14,15,16,20];
arr1.reverse();
console.log(arr1);

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));