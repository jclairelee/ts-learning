function sendMsg(name: string = "buddy") {
  return `hey, ${name}!`;
}
sendMsg(); ✅
sendMsg("claire"); ✅
sendMsg(450); ❌

// The default type for a function parameter is "any", if no type is specified
function multifly(x: number, y: string) {
  return x * y;
}
multifly("5", 5); ❌
multifly(5, "5"); ✅

//you can declare type of the return value
function addNums (x: number, y: number):number {
  return x * y;
}

const add = (x: number, y:number): number =>{
    return x + y;
}

//this returns string or number 
function random(num: number){
if(Math.random()<50){
    return num.toString();
}
return num;
}

//Anonymous
const colors = ["red", "green", "yellow", "pink", "blue"];
colors.map(color=>{
    return color.toLowerCase();
})

// When a function does not refer a value, TS infers that its return type is void.
const print(msg: string):void {
    console.log(msg)
    return 0; ❌
}

//Never type: does not finish excuting. 
function Err(msg: string){
    throw new Err(msg)
}
//
function neverStop(): never {
  while ( true ) { neverStop(); }
}