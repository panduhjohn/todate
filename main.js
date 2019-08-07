function getCurrentDateAndTime() {
  return new Date().toLocaleString();
}

let todos = [
  `Be able to mark todos "done".`,
  `Allow user interaction through the DOM`,
  `Add dates to todos.`,
]

let completed = [
  false,
  false,
  false,
]

let dates = [
  getCurrentDateAndTime(),
  getCurrentDateAndTime(),
  getCurrentDateAndTime(),
]

// Or the ALTERNATE sub-array/tuple method:
// let todos = [
//   [
//     `Be able to mark todos "done".`,
//     false,
//     getCurrentDateAndTime(),
//   ],
//   [
//     `Allow user interaction through the DOM`,
//     false,
//     getCurrentDateAndTime(),
//   ],
//   [
//     `Add dates to todos.`,
//     false,
//     getCurrentDateAndTime(),
//   ],
// ]
