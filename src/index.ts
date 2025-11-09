// 1111111111111111111111111111
type EvenNumbers =  (arrNum: number[]) => number;
const arr = [1,2,3,4,5,6,7,8,9,10]
const sumEvenNumbers:EvenNumbers = (arr)=> {
const newArray = arr.filter((a:number)=>{return a % 2 === 0})
.reduce((sum:number, num:number):number => sum + num,0)
return newArray
}
// console.log(sumEvenNumbers(arr))

// 222222222222222222222222222222222

interface StringToBooleanFunction {
  (string:string):boolean
}

const toCheckString:StringToBooleanFunction = (string) => {
  return string.length !== 0;
}

// console.log( toCheckString (" "))
// 3333333333333333333333333333333
type CompareStrings = (q: string, b: string) => boolean;

const compareStrings: CompareStrings = (str1, str2) => {
  return str1 === str2;
};
// console.log (compareStrings("kola", "cola"))
// console.log (compareStrings("kola", "Kola"))
// console.log (compareStrings("kola", "kola"))
// 44444444444444444444444444444444444444

// function getLastElement<T>(arr: T[]): T| undefined {
//   return arr[arr.length - 1];
// }
// console.log(getLastElement([1, 2, 3, 4]));   

// 5555555555555555555555555555555555555

function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}

console.log(makeTriple("a", "b", "c")); 


