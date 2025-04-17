function reverseArray(arr : number[]): number[]
{
let reverse : number[] = [];

let rev = arr.reverse();
console.log(rev);
for(let i=arr.length-1;i>=0;i--)
{

reverse.push(arr[i]);


}

return arr;
}


let arr : number[] = [1,2,3,280,1,2,];


console.log(reverseArray(arr));