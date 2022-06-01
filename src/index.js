import Example from './scripts/example';

// const abcd = new Example(main);
// abcd.getData()
//     .then(data => {
//         // If the fetch was successful, here we can manipulate the data we received
//         console.log(data);
//     })
//     .catch(error => {
//         // If our fetch was unnsuccessful, here we can handle our error(s)
//         console.error('There has been a problem with your fetch operation: ', error);
//     }
// );

document.addEventListener("DOMContentLoaded", () => {
  console.log('Hello World');
  const main = document.getElementById("main");
  const abcd = new Example(main);
  abcd.getData();
});