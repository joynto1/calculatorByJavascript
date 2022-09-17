document.getElementById('number-one').addEventListener('click', function () {
    const input = document.getElementById('inputField');
    const onetext = input.value += 1;


})
document.getElementById('number-two').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const twotext = input.value += 2;
})
document.getElementById('number-three').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const threetext = input.value += 3;
})
document.getElementById('number-four').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const fourtext = input.value += 4;
})
document.getElementById('number-five').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const fivetext = input.value += 5;
})
document.getElementById('number-six').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const sixtext = input.value += 6;
})
document.getElementById('number-seven').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const seventext = input.value += 7;
})
document.getElementById('number-eight').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const eighttext = input.value += 8;
})
document.getElementById('number-nine').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const ninetext = input.value += 9;
})
document.getElementById('number-zero').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const zerotext = input.value += 0;
})
document.getElementById('clear-button').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const clearbuttontext = input.value = '';
})
document.getElementById('number-dot').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const dottext = input.value += '.';
})
document.getElementById('gun-button').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const plustext = input.value += '*';

})
document.getElementById('number-paar').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const paartext = input.value += '%';

})
document.getElementById('minus-button').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const plustext = input.value += '-';

})
document.getElementById('plus-button').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const plustext = input.value += '+';

})
document.getElementById('vag-button').addEventListener('click', function () {
    input = document.getElementById('inputField');
    const plustext = input.value += '/';

})
document.getElementById('clear-all').addEventListener('click', function () {
    input = document.getElementById('inputAnsField');
    const Allcleartext = input.value = '';

})


document.getElementById('equal-button').addEventListener('click', function () {
    const result = document.getElementById('inputAnsField');
    const resultText = result.value;
    result.value = input.value;
    if (result.value == '') {
        alert('Please Enter Number');
    }
    else {
        result.value = eval(result.value);

    }



})












