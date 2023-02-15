const printNote = (note: { title: string; text: string }) => {
  console.log(note);
  console.log(note.title);
  console.log(note.text);
};

printNote({ title: "Good Morning", text: "Bye" });
// output>>>
// { title: 'Good Morning', text: 'Bye' }
// Good Morning
// Bye

// a pattern of object type can be set like this
const baseline: { x: number; y: number } = { x: 45 }; ❌ didn't follow the declared pattern
const base: { x: number; y: number } = { x: 45, y: 2 };

// return type annptation of an object literal
function randomBase(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomBase());


printNote({ title: "Hi", text: "Byeeee!", id: 456 }); ❌ error occurs due to the extra property of id
const addInfo = {
  title: "wow",
  text: "great!",
  id: 456,
};

printNote(addInfo); ✅ this works. It only prints out the required two properties
// output>>
// wow
// great!
