
/* creo il ciclo for e lo testo*/

for (let n = 1; n <= 100; n++) {
    /* qui creo una variabile che crea un elemento per HTML in JS*/
    const output = document.createElement("h2");
    /*e qui lo collego al body del HTML*/
    document.body.appendChild(output);

    /*qui vengono aggiunte le condizioni da rispettare dentro il ciclo*/
    if (n % 15 == 0) {
        /*qui richiamo l'elemento creato in modo che stampi cio' che richiedo nel HTML*/
        output.innerText = "Ecco qua il risultato: " + n + ' FizzBuzz';
        /*qui viene stampato in console la richiesta desiderata*/
        console.log(n + ' FizzBuzz');
    } else if (n % 5 == 0) {
        output.innerText = "Ecco qua il risultato: " + n + ' Buzz';
        console.log(n + ' Buzz');
    } else if (n % 3 == 0) {
        output.innerText = "Ecco qua il risultato: " + n + ' Fizz';
        console.log(n + ' Fizz');
    } else {
        output.innerText = "Ecco qua il risultato: " + n + ' Non divisible per 3 o per 5';
        console.log(n + ' Non divisible per 3 o per 5');
    }

}

