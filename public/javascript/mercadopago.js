const mp = new MercadoPago('');

const cardForm = mp.cardForm({
    amount: 10.5,
    autoMout: true,
    form: {

    },
});

console.log(cardForm);