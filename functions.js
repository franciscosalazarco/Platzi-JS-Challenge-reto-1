const services = [
    { name: 'netflix', price: 10.99 },
    { name: 'prime', price: 5.99 },
    { name: 'disney', price: 5.99 },
    { name: 'hbo', price: 5.99 },
    { name: 'paramount', price: 4.99 },
    { name: 'apple', price: 4.99 },
    { name: 'directv', price: 11.19 },
    { name: 'youtube', price: 7.19 },
];

function verifyOption() {
    let lista = [];
    const inputService1 = document.getElementById("option-1");
    if (inputService1.checked == true && inputService1.value == services[0].name) {
        lista.push(services[0].price);
    };
    const inputService2 = document.getElementById("option-2");
    if (inputService2.checked == true && inputService2.value == services[1].name) {
        lista.push(services[1].price);
    };
    const inputService3 = document.getElementById("option-3");
    if (inputService3.checked == true && inputService3.value == services[2].name) {
        lista.push(services[2].price);
    };
    const inputService4 = document.getElementById("option-4");
    if (inputService4.checked == true && inputService4.value == services[3].name) {
        lista.push(services[3].price);
    };
    const inputService5 = document.getElementById("option-5");
    if (inputService5.checked == true && inputService5.value == services[4].name) {
        lista.push(services[4].price);
    };
    const inputService6 = document.getElementById("option-6");
    if (inputService6.checked == true && inputService6.value == services[5].name) {
        lista.push(services[5].price);
    };
    const inputService7 = document.getElementById("option-7");
    if (inputService7.checked == true && inputService7.value == services[6].name) {
        lista.push(services[6].price);
    };
    const inputService8 = document.getElementById("option-8");
    if (inputService8.checked == true && inputService8.value == services[7].name) {
        lista.push(services[7].price);
    };
    suma = 0;
    lista.forEach(function (numero) {
        suma += numero;
    })
    return suma;
}

function compareOptions(cine, streaming) {
    const totalCine = cine * 4.99;
    const result = totalCine - streaming;
    return result;
}

function onClickButtonVerification() {
    const inputCine = document.getElementById("InputCineTime");
    const cineTime = inputCine.value;
    const streamingTime = verifyOption();
    const total = compareOptions(cineTime, streamingTime);
    if (total > 0) {
        result.innerText = `Es más caro ir al cine, en el cine gastas: ${cineTime}, en streaming: ${streamingTime}, total: ${total}`;
    } else if (total == 0) {
        result.innerText = `Gastas lo mismo en el cine y el streaming, en el cine gastas: ${cineTime}, en streaming: ${streamingTime}, total: ${total}`;
    } else if (total < 0) {
        result.innerText = `Es más barato ir al cine, en el cine gastas: ${cineTime}, en streaming: ${streamingTime}, total: ${total}`;
    } else {
        result.innerText = `Hay un error, en el cine gastas: ${cineTime}, en streaming: ${streamingTime}, total: ${total}`;
    }
}