class Car{

    engine : string;
    
    constructor (en:string) 
    {
        this.engine=en;
    
    }
    
     str(a :string,b:string) : string;
      str(a :number,b:number):number;
    
    
     str(a :number,b:number,c:number):number;
    
    str(a:any,b:any,c?:any)
    {
        if(typeof a ==="string" && typeof b=="string")
        {
    
        return a+b;    
        }
        else if(typeof a =="number" && typeof b==="number")
        {
    
    return c!==undefined ? a+b+c : a+b;
        }
    
    }
    
    
    }
    
        const car1 = new Car("ford");
    
    console.log(car1.str(1,2,3));
    console.log(car1.str(100,200));
    
    console.log(car1.str("100","200"));
    
    
    
    