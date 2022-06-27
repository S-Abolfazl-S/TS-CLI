/* 
    PASSWORD GENERATOR
    S ABOLFAZL S

    charGenerator: return list of characters
    passwordGenerator: return  passwords of string type
    Mode: selected complexity of password for create it
*/

const charGenerator = (start: string, end: string): string[] => {
    // get list of characters between range
    // start=a, end=z => [a,b,c,...]
    let list: string[] = [];
    let i = start.charCodeAt(0);
    let j = end.charCodeAt(0);
    for (; i <= j; i++) {
        list.push(String.fromCharCode(i));
    }
    return list;
}

enum Mode {
    simplex = 1,
    complex = 2
}

function passwordGenerator(size: number, mode: Mode): string {
    let pass: string = '';
    let letters: string[] = [];
    switch (mode) {
        case Mode.simplex: {
            letters.push(
                ...charGenerator('a', 'z'),
                ...charGenerator('A', 'Z'),
                ...charGenerator('0', '9'))
        }; break;
        case Mode.complex: {
            letters.push(
                ...charGenerator('a', 'z'),
                ...charGenerator('A', 'Z'),
                ...charGenerator('0', '9'),
                ...charGenerator(' ', '/'),
                ...charGenerator(':', '@'),
                ...charGenerator('\\', '`'),
                ...charGenerator('{', '}'),
            )
        }; break;
    }
    // create password
    // random select letter from letters 
    for (let i: number = 0; i <= size; i++) {
        let index: number = Math.floor(Math.random() * (letters.length - 0)) + 0;
        pass += letters[index];
    }
    return pass
}

console.log(passwordGenerator(30, Mode.complex));