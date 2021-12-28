function operation(number, power){
    function solve(number, power){
        let result = 1;

        for (let i = 0; i < power; i++) {
                result*=number;            
        }

        return result;
    }

    console.log(solve(number, power));
}
operation(2,8)