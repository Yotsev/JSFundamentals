function solve(input) {
    let employees = [];
    for (let i = 0; i < input.length; i++) {

        let currentEmployee = {};
        let currentName = input[i];

        currentEmployee['name'] = currentName;
        currentEmployee['personalNumber'] = currentName.length;

        employees.push(currentEmployee);
    }

    for (const employee of employees) {
        for (const key in employee) {
            
            console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
            
        }
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])