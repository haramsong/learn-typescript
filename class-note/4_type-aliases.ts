// interface Person1 {
//     name: string;
//     age: number;
// }

type Person1 = {
    name: string;
    age: number;
}

// interface -> 명만 나옴(Person1), type -> 속성 타입 다 나옴({name: string; age: number})
var sejin: Person1 = {
    name: '세호',
    age: 10,
}