const currenOne = document.querySelector('#currency-one');
const currenTwo = document.querySelector('#currency-two');

const amountOne = document.querySelector('#amount-one');
const amountTwo = document.querySelector('#amount-two');

const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');

// fetch exchange rateas and update

const caclulate = () => {
    const currency_one = currenOne.value;
    const currency_two = currenTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const rate = data.rates[currency_two];

            rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`
            amountTwo.value = (amountOne.value * rate).toFixed(2);
        })
}

// events
currenOne.addEventListener('change', caclulate);
amountOne.addEventListener('input', caclulate);

currenTwo.addEventListener('change', caclulate);
amountTwo.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
    const temp = currenOne.value;
    currenOne.value = currenTwo.value;
    currenTwo.value = temp;
    caclulate()
})

// function
caclulate()