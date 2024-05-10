/* creo il ciclo for e lo testo*/
for (let n = 1; n <= 100; n++) {
    if (n % 15 == 0) {
        console.log(n + ' FizzBuzz');
    } else if (n % 5 == 0) {
        console.log(n + ' Buzz');
    }
}