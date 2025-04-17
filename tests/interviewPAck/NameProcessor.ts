export class NameProcessor {
  
    returnNames() : string [] {
      let names: string[] = ['#Ram', '$Sitha', '#Lakshman', '$Urmila', '#Hanuman', '#Bharath'];
      
      // Array to store names starting with '$'
      let dollarNames: string[] = [];
      
      // Check each name in the array
      for (let i = 0; i < names.length; i++) {
        // Check if the name starts with '$'
        if (names[i].startsWith('$')) {
          dollarNames.push(names[i]);
        }
      }
      
      console.log(dollarNames);
      return dollarNames;
    }
  }
  
  // Example usage
  const processor = new NameProcessor();
  console.log(processor.returnNames());  // The parameter isn't used in the function, but we're passing an empty array to match the signature