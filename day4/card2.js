



// toString(2) -> 2진법으로 변환
// .split("") -> 문자열을 배열로 변환
// shift() : 배열의 맨 앞에 값을 제거한다.

function solution(n){

    // 숫자를 2진법으로 변환
    const binArr = n.toString(2).split("");
    console.log(`${n}의 2진법은 ${binArr}`)

    // (n - (n보다 작은 2^x))   3  - 11
    binArr.shift();

    // (n - (n보다 작은 2^x)) 값을 10진법으로 다시 변환
    const answer = parseInt(binArr.join(""), 2) * 2;
    console.log(`(${n} - (${n}보다 작은 2^x)) * 2 = ${answer}`)

    // n = 2^x가 아니면 answer * 2, n = 2^x이면 answer가 0(false)이므로 n 반환
    return answer ? answer : n;
}

let card = 15;
console.log(`카드가 ${card}장이면 남는 카드는 '${solution(card)}' 입니다`);


