

function reverseString(scr : string) : string
{

let rev  ='';

for(let i=scr.length-1;i>=0;i--)
{
rev += scr[i];

}

return rev;

}

console.log(reverseString("This is main string"));


