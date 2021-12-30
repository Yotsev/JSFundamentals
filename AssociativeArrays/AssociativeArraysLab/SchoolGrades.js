function solve(input) {
    let students = new Map();

    for (let i = 0; i < input.length; i++) {
        let [name, ...grades] = input[i].split(' ');

        if (students.has(name)) {
           // grades.unshift(...students.get(name));
           grades = students.get(name).concat(grades);
        }

        students.set(name, grades.map(Number));
    }

    let sortedStudents = Array.from(students)
        .sort((a, b) => {
            let firstSum = a[1].reduce((acc, curr) => acc += curr, 0);
            let secondSum = b[1].reduce((acc, curr) => acc += curr, 0);

            return firstSum / a[1].length - secondSum / b[1].length;
        })
    for (const student of sortedStudents) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    }
}

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])