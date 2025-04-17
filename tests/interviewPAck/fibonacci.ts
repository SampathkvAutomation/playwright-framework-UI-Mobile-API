function fibno(series : number) : number
{

if(series ===1 || series ===2)
{

return 1;
}
let fn=1,fn1=1,fn2=1;

for(let i=3;i<=series;i++)
{


fn =fn1+fn2;
fn1=fn2;
fn2=fn;
}

return fn;
}

let seriesNumber = 10;
for(let i=1;i<=seriesNumber;i++)
{
console.log(fibno(i));
}