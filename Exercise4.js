function findNumberOfChar(text, char) {
    let count = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === char) {
            count++;
        }    
    }
    return count;
}

// let text = "hello world";
// char = 'o';
let text = "aaa bbb a";
let char = 'a';
console.log(findNumberOfChar(text, char));