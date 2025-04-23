function genTicket(n) {
  let arr = new Array(n);

  for (let i = 0; i < n; i++) {
    let number = Math.floor(Math.random() * 10);
    arr[i] = number;
  }
  return arr;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

export { genTicket, sum };
