function isPrime(num: number): boolean {
  if (num <= 1) {
      return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }

  return true;
}

function findLargestPrimes() {
  let userInput: string | null = prompt("Digite um número:");
  
  if (userInput === null) {
      console.log("Nenhum número foi inserido. Por favor, tente novamente.");
      return;
  }

  let startNum: number = parseInt(userInput);

  if (isNaN(startNum)) {
      console.log("Entrada inválida. Por favor, digite um número.");
      return;
  }

  let primes: number[] = [];
  let num: number = startNum;

  while (primes.length < 10) {
      if (isPrime(num)) {
          primes.push(num);
      }
      num++;
  }

  console.log("Os 10 maiores números primos a partir de " + startNum + " são:");
  console.log(primes);
}

findLargestPrimes();

