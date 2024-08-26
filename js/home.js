let output = document.getElementById('output');

let word = [
    'Our business is helping you grow your business',
    'Join us to get more experience!'
]


let charturn = 0;
let wordturn = 0;
printWord()
function printWord(){
    if(charturn <= word[wordturn].length){
        output.innerHTML = word[wordturn].substr(0, charturn)
        charturn++
        setTimeout(printWord, 100)
    }
    else{
        setTimeout(deleteWord, 500)
    }

}

function deleteWord(){
    if(charturn >= 0){
        output.innerHTML = word[wordturn].substr(0, charturn)
        charturn--
        setTimeout(deleteWord, 50)
    }
    else{
        if(wordturn < word.length - 1){
            wordturn++
        }
        else{
            wordturn = 0
        }
        charturn = 0
        setTimeout(printWord, 300)
    }
}