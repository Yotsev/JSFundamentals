function solve(password) {

    function lengthValidator(pass) {
        return pass.length >= 6 && pass.length <= 10
    }

    function isInRangae(ch, stat, end) {
        return ch.charCodeAt() >= stat.charCodeAt() && ch.charCodeAt() <= end.charCodeAt();
    }

    function isLetterAndDigits(pass) {

        let isValid = true;

        for (const char of pass) {
            if (!(isInRangae(char, 'A', 'Z') || isInRangae(char, 'a', 'z') || isInRangae(char, '0', '9'))) {
                isValid = false;
            }
        }

        return isValid;
    }

    function hasTwoDigits(pass) {
        let countOfDigits = 0;
        for (const char of pass) {
            if (isInRangae(char, '0', '9')) {
                countOfDigits++;
            }
        }

        return countOfDigits;
    }

    if (lengthValidator(password) && isLetterAndDigits(password) && hasTwoDigits(password) >= 2) {
        console.log('Password is valid');
    } else {
        if (!lengthValidator(password)) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!isLetterAndDigits(password)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!hasTwoDigits(password)) {
            console.log('Password must have at least 2 digits');
        }
    }
}

solve('logI11asdf1')
solve('MyPass123')
solve('Pa$s$s')