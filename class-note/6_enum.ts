enum Shoes {
    Nike,
    Adidas
}

// (enum member) Shoes.Nike = 0
Shoes.Nike;
// (enum member) Shoes.Adidas = 1
Shoes.Adidas;

enum Shoes2 {
    Nike = 'Nike',
    Adidas = 'Adidas',
}
// (enum member) Shoes2.Nike = "Nike"
Shoes2.Nike;
// (enum member) Shoes2.Adidas = "Adidas"
Shoes2.Adidas;

// 예제
// function askQuestion(answer: string) {
//     if (answer === 'yes') {
//         console.log('정답입니다');
//     }
//     if (answer === 'no') {
//         console.log('오답입니다.');
//     }
// }
// askQuestion('예스');
// askQuestion('y');

enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);
// Argument of type '"Yes"' is not assignable to parameter of type 'Answer'.
// askQuestion('Yes');

