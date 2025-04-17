class arrayExamples {
     names : string [] =["sss","KKKK","wywtsg","mdjadjaj"];

 arraydemo() : string []
{



    this.names.push("KKK888")

   this.names.unshift("DFGTjdjj11");
    this.names.forEach( name => 
        {
        
        console.log(name);
        
        
        })
        
        this.names.shift();

    this.names.pop();


    let names2 : string [] =["01ii2","zscsefw","1332dffr","mdjadjaj"];

   this.names =this.names.concat(names2);

   this.names= this.names.slice(1,4);



   this.names.forEach( name1 => {

    console.log(name1);
   })

   this.names = this.names.slice();

    return this.names;



}




}

let arrdemo =  new arrayExamples();


arrdemo.arraydemo().forEach( name => 
{

console.log(name);




})

type id = string;
type id1 = number;

let myId: id = "sss";
//let myId : String ="sss"
let myId1: id1 = 123;

console.log(myId);
console.log(myId1);

const car = {

type : "fiat",
color : "white"
}



let paer : Readonly<string>;

paer="jsjjs";

const gksj : string = "jdjjd";
gksj="";
