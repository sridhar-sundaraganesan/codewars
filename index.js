


// // // // // // // function mouthSize(animal) {
// // // // // // //   if (animal === 'alligator' || animal === 'alligator'.toUpperCase()) {
// // // // // // //     return 'small';
// // // // // // //   } else {
// // // // // // //     return 'wide';
// // // // // // //   }
// // // // // // // }


// // // // // // // console.log(mouthSize('ALLIGATOR'));


// // // // // // // function isVIP(name) {
// // // // // // //   return name.toLowerCase() === 'sridhar' ? 'Access granted' : 'Access denied';
// // // // // // // }

// // // // // // // console.log(isVIP('Sridhar'));
// // // // // // // console.log(isVIP('SriDhaR'));
// // // // // // // console.log(isVIP('LIONN'));


// // // // // // // function checkPasswordStrength(password) {

// // // // // // //   const hasUpper = /[A-Z]/.test(password)
// // // // // // //   const hasLower = /[a-z]/.test(password)
// // // // // // //   const hasNumber = /[0-9]/.test(password)
// // // // // // //   const hasSpecial = /[!@#$%^&*]/.test(password)

// // // // // // //   if (password.length >= 12 && hasLower && hasSpecial && hasUpper && hasNumber) {
// // // // // // //     return 'Very strong'
// // // // // // //   } else if (password.length >= 8 || hasLower || hasNumber || hasUpper || hasSpecial) {
// // // // // // //     return 'Strong'
// // // // // // //   } else {
// // // // // // //     return 'Weak';
// // // // // // //   }

// // // // // // // }



// // // // // // // function splitting(str) {
// // // // // // //   return str.trim().split(/\s+/)
// // // // // // // }


// // // // // // // console.log(splitting('Janani Prabhuvasan'));



// // // // // // // Like, Dislike, Nothing come from Preloaded

// // // // // // // console.log(buttons[buttons.length - 1]);

// // // // // // function likeOrDislike(buttons) {

// // // // // //   if (buttons[buttons.length - 1] === 'Like' && buttons[buttons.length - 2] !== 'Like') {
// // // // // //     return 'Like';
// // // // // //   } else if (buttons[buttons.length - 1] === 'Dislike' && buttons[buttons.length - 2] !== 'Dislike') {
// // // // // //     return 'Dislike'
// // // // // //   } else if (buttons.length == 0 || buttons === undefined || buttons[buttons.length - 1] === 'Dislike' && buttons[buttons.length - 2] === 'Dislike' || buttons[buttons.length - 1] === 'Like' && buttons[buttons.length - 2] === 'Like')
// // // // // //     return 'Nothing'
// // // // // // }


// // // // // // console.log(likeOrDislike(['Dislike', 'Like']))
// // // // // // console.log(likeOrDislike(['Dislike', 'Like', 'Like']))


// // // // // function accum(s) {

// // // // //   const arr = s.split('')

// // // // //   let str;

// // // // //   for (let index = 0; index < arr.length; index++) {

// // // // //     if (indexof(arr[index] === index)) {
// // // // //       str = arr[index].toUpperCase();
// // // // //       console.log(str);
// // // // //     }

// // // // //   }

// // // // //   return str;
// // // // // }

// // // // // console.log(accum("abcd"));  //"A-Bb-Ccc-Dddd"
// // // // // console.log(accum("RqaEzty"));
// // // // // console.log(accum("cwAt"));



// // // // function reverseWords(str) {
// // // //   let split = str.split("")
// // // //   console.log(split)

// // // //   for (let index = 0; index < split.length; index++) {

// // // //   }

// // // // }


// // // // console.log(reverseWords("This is an example!"));


// // // function likes(names) {
// // //   if (names.length === 0) {
// // //     return `no one likes this`
// // //   }

// // //   for (let index = 0; index < names.length; index++) {
// // //     if (names.length === 1) {
// // //       return `${names[0]} likes this`;
// // //     } else if (names.length === 2) {
// // //       return `${names[0]} and ${names[1]} like this`
// // //     } else if (names.length === 3) {
// // //       return `${names[0]}, ${names[1]} and ${names[2]} like this`
// // //     } else if (names.length > 4) {
// // //       return `${names[0]}, ${names[1]} and 2 others likes this`
// // //     }
// // //   }
// // // }



// // // console.log(likes([]));
// // // console.log(likes(["Jacob", "Alex"]));
// // // console.log(likes(['Janani']));
// // // console.log(likes(["Max", "John", "Mark"]));




// // function quarterMonth(month) {

// //   if (Math.ceil(month / 3) <= 3) {
// //     return Math.ceil(month / 3);
// //   } else if (Math.ceil(month / 3) > 3 && Math.ceil(month / 3) <= 6) {
// //     return 2;
// //   } else if (Math.ceil(month / 3) > 6 && Math.ceil(month / 3) <= 9) {
// //     return 3;
// //   } else {
// //     return 4;
// //   }


// // }


// // console.log(quarterMonth(11))




// function friend(friends) {

//   let arr = [];

//   for (let index = 0; index < friends.length; index++) {
//     if (friends[index].length === 4) {
//       arr.push(friends[index]);
//     }
//   }

//   return arr;

// }


// console.log(friend(["Ryan", "Kieran", "Mark"]));
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));


function removeEveryOther(arr) {
  let result = [];


  for (let index = 0; index < arr.length; index++) {
    if (arr.length === 1) {
      return arr;
    }
  }

}


console.log(removeEveryOther(['Hello', 'Greet', 'Hello again']));