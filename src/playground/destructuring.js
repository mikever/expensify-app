//
// Object destructuring
//

// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const {name = 'anonymous', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature = 32} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19247'];

// const [, city = 'New York', state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = [
  'coffee (hot)',
  '$2',
  '$2.50',
  '$2.75'
];

const [drink, , medium] = item;

console.log(`A ${drink} costs ${medium}`);

