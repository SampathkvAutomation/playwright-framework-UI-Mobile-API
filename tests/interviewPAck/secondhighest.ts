function findsecondHighestElement(arr:number[]) : number[]{


    let temp =0,flag=0;
    
    for(let i=0;i<arr.length-1;i++)
    {
    
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
    
    temp =arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
    flag=1;
    
    }
    
    }
    }
    
    
    let newarr: number[] = [...new Set(arr)];
    
    // console.log(newarr[newarr.length-2]);
    
        return [...new Set(arr)];
    
    
    }
    
    let arr1 : number[] = [100,23,4,5,6,11,100,99,99,1];
    
    console.log(findsecondHighestElement(arr1).at(-2));
    