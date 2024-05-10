/* creo il ciclo for e lo testo*/

for (let n = 1; n <= 100; n++) {
    /*qui vengono aggiunte le condizioni da rispettare dentro il ciclo*/

    if (n % 15 == 0) {

        /*qui viene stampato in console la richiesta desiderata*/
        console.log(n + ' FizzBuzz');
    } else if (n % 5 == 0) {
        console.log(n + ' Buzz');
    } else if (n % 3 == 0) {
        console.log(n + ' Fizz');
    } else {
        console.log(n + ' Non divisible per 3 o per 5');
    }
}