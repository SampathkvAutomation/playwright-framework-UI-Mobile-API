function revserword(scr : string)
{

let words : string [] = scr.split(' ');
let result : string[] = [];

 let mid = Math.floor(words.length / 2);
for(let i=0;i<words.length;i++)
{

let revse : string ='';
if(i===mid)
{
  revse +=words[i];
}
else{
 for(let j=words[i].length-1;j>=0;j--)
 {

revse += words[i][j];

 }
}

result.push(revse);




}


return result.join(' ');




}

console.log(revserword('RACHANA HULISARA KRISHAN sampath MURTHY'));