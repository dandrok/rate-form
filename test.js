const arrayList = ["jeden", "dwa", "trzy", "cztery", "piec", "szesc", "siedem"];

// for (let index = 0; index < arrayList.length; index++) {
//   if (index === 2) {
//     console.log(`znalezione to jest: ${index}`);
//   } else {
//     console.log(`nie znalzzlem to jest ${index}`);
//   }
// }

// arrayList.map((test) => {
//   if (test === "cztery") {
//     console.log(`znalazlem to jest ${test}`);
//   } else {
//     console.log(`nie znalazlem to jest: ${test}`);
//   }
// });

arrayList.forEach((test) => {
  if (test === "cztery") {
    console.log(`znalazlem to jest ${test}`);
  }
  console.log(`nie znalazlem to jest: ${test}`);
});
