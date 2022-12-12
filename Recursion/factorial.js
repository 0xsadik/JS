
function factorial (poistion) {
    let answer = 1;
    for (let num = poistion; num > 0; num--) {
        answer *= num;
    }
    return answer;
}