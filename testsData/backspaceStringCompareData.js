export const leetCodeExamples = [
  [['ab#c', 'ad#c'], true],
  [['ab##', 'c#d#'], true],
  [['a##c', '#a#c'], true],
  [['a#c', 'b'], false],
];

const chars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 
  'v', 'w', 'x', 'y', 'z', '#',
];

export const longStrings = ['', ''];
for (let i = 0; i < 200; i++) {
  let random = Math.floor(Math.random() * chars.length);
  // allows for randomization of backspaces to be input into one of the strings
  let backspace = Math.floor(Math.random() * 10);
  longStrings[0] += chars[random];
  longStrings[1] += chars[random];
  if (backspace > 5) {
    longStrings[0] += chars[backspace];
    longStrings[0] += '#';
  } else {
    longStrings[1] += chars[backspace];
    longStrings[1] += '#';
  }
}

