

//문제명 중복 문자 제거. 중복된 문자를 제거하고 사전식 순서로 나열하라

//문제 1.
//입력 "bcabc"
//출력 "abc"

//문제 2.
//입력 "cbacdcbc"
//출력 "acdb"


// 자바스크립트의 문자열에서 특정 문자의 위치를 찾기 위해 indexOf 함수를 사용.
// indexOf() 함수는 배열에서 특정값이 처음으로 나타나는 index를 리턴함.
//


function indexOfExample(string){
    for(let i =0; i<string.length; i++){
        console.log(string.indexOf(string[i]))
    }
}

let example = "abcd"
indexOfExample(example)


//
// function solution(string) {
//     let answer = "";
//
//     for (let i = 0; i < string.length; i++) {
//         console.log(string[i] + '의 indexOf 번호는(첫 등장한 번호는) '+string.indexOf(string[i])+'번째 입니다.')
//
//         if (string.indexOf(string[i]) == i) {
//             console.log('안' + string.indexOf(string[i]))
//             // console.log(i)
//             answer += string[i];
//         }
//     }
//     return answer.split('').sort().join('');
// }
//
//
// let string = "bcabc";
// let string2 = "cbacdcbc"
//
// console.log(solution(string))
// console.log(solution(string2))
