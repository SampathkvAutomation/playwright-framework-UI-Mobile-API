function findOccurance(Word : string)
{

    let char : string[] = Word.split("");


const hm = new Map();
for(let c of char)
{
 
 if(hm.has(c))
 {
    hm.set(c,hm.get(c)+1)
 }

else{

    hm.set(c,1)
}

}

let keys = hm.keys();

for(let k of keys)
{
    console.log(k+" Occurs = >" + hm.get(k)+" times");
}


}


findOccurance("SAMPATH");


