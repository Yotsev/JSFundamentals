function repeat(text, number){
    
  let result = (text,number) => {
        let res = '';
    
        for (let i = 0; i < number; i++) {
            res+= text;                        
        }

        return res;
    }

    console.log(result(text, number));
}

repeat('abs', 3)