// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// // Argument of type 'number' is not assignable to parameter of type 'string'.
// logMessage(100);

var hrs: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer2 | Person2) {
    someone.name;
    // 어느 인자가 들어올 지 모르기 때문에 보장된 속성에 대해서만 제공
    // someone.skill
    // someone.age
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

function askSomeone2(someone: Developer2 & Person2) {
    someone.name;
    someone.skill;
    someone.age;
}

// Argument of type '{ name: string; age: number; }' is not assignable to parameter of type 'Developer2 & Person2'.
//   Property 'skill' is missing in type '{ name: string; age: number; }' but required in type 'Developer2'.
// askSomeone2({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone2({ name: '캡틴', age: 100 });
