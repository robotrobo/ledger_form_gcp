let fa1;
let fa2;
let term1;
let term2;
let result;
let answer;

function sketch() {

    fa1 = select('#fa1');
    fa2 = select('#fa2');
    term1 = select('#term1');
    term2 = select('#term2');
    answer = select('#answer')
    result = httpGet(`calculator.php?fa1=${fa1.value()}&fa2=${fa2.value()}&term1=${term1.value()}&term2=${term2.value()}`)
    answer.value(result)
}