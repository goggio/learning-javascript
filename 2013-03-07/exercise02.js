/**
 * @author goggio
 */
//exercise02

function fibonacci (n) {
	fibonacci[0] = 0;
	fibonacci[1] = 1;
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci[n];
}

//esempio con n=4
console.log(fibonacci(4));
