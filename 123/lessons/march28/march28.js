// Посчитать сколько человек будет платить за кредит. Несколько полей: срок (сколько месяцев), процентная ставка, сумма. 
// В конце кнопка  "расчет" с подсчетом ежемесячного платежа.
window.addEventListener('load', main);

function main(){
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        let result = document.getElementById('result');
        const term = parseInt(document.getElementById('term').value);
        const rate = parseInt(document.getElementById('rate').value);
        const amount = parseInt(document.getElementById('amount').value);

        let res = (((amount*1 *(rate/100)*(term/rate*1)+amount*1))/term);
        let overpayment = amount*(rate/100)/12;
        let overpaymentAll = amount*(rate/100);
        let sum = amount + overpaymentAll;
        let sumOfMonth = sum/12;

        result.innerHTML = 'Ежемесячный платеж составит: ' + res + 
        '. Переплата за месяц: ' + overpayment + 
        '. Переплата за всё время: ' + overpaymentAll + 
        '. Сумма итого: ' + sum +
        '. Сумма за месяц: ' + sumOfMonth;
    });
}