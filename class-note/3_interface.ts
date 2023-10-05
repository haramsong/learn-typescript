interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 10,
    name: '세호',
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age: 23,
    name: '캡틴',
}

getUser(capt);

// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

// function sum(a, b) {
//     return a + b;
// }
var sum: SumFunction;
// Type 'void' is not assignable to type 'number'.ts(2322)
// sum = function() {

// }
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr:StringArray = ['a', 'b', 'c'];
// arr[0] = 10;
arr[0] = '10';

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp,
}

var obj: StringRegexDictionary = {
    sth: /abc/,
}

// 'a': string, 요구: RegExp
// obj['cssFile'] = 'a'

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

// Type '{ language: string; }' is missing the following properties from type 'Developer': name, age ts(2739)
// var captain: Developer = {
//     language: 'C',
// }

var captain: Developer = {
    name: '캡틴',
    age: 23,
    language: 'ts',
}