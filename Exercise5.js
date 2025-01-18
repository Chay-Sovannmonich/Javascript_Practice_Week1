function countWord(text, word) {
    count = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] == word) {
            count++;
        }
    }
    let totalOfWord = count + 1;
    return totalOfWord;
}

// let text = "hello world";
let text = "This is the best day";
let word = ' ';
console.log(countWord(text, word));