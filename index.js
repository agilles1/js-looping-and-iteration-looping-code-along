// Code your solutions in this file
function writeCards(a, holiday){
    for(let i=0; i<a.length; i++) {
        a[i] = `Thank you, ${a[i]}, for the wonderful ${holiday} gift!`;
    }
    return a
}

function countDown(n){
    while (n >= 0){
        console.log(n)
        n--
    }
}