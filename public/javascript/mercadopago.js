// eslint-disable-next-line no-undef
const mp = new MercadoPago('', { locale: 'pt-BR' } );

const cardForm = mp.cardForm({
  amount: '8.00',
  autoMout: true,
  form: {
    id: 'form-checkout',
    cardholderName: {
      id: 'card__holder__name',
      placeholder: 'Cardholder name'
    },
    cardholderEmail: {
      id: 'card__holder__email',
      placeholder: 'Cardholder email'
    },
    cardNumber: {
      id: 'card__number',
      placeholder: 'Card number'
    },
    cardExpirationMonth: {
      id: 'card__expiration__date__month',
      placeholder: 'MM'
    },
    cardExpirationYear: {
      id: 'card__expiration__date__year',
      placeholder: 'YYYY'
    },
    securityCode: {
      id: 'card__security__code',
      placeholder: 'CVV'
    },
    identificationType: {
      id: 'checkout__identification__type',
      placeholder: 'Document Type'
    },
    identificationNumber: {
      id: 'checkout__identification__number',
      placeholder: 'Document Number'
    },
    installments: {
      id: 'checkout__installments',
      placeholder: 'Total installments'
    },
    issuer: {
      id: 'checkout__issuer',
      placeholder: 'Issuer'
    }
  },
  callbacks: {
    onFormMounted: error => {
      if (error) return console.warn('Form Mounted handling error: ', error)
      console.log('Form mounted')
    },
    onFormUnmounted: error => {
      if (error) return console.warn('Form Unmounted handling error: ', error)
      console.log('Form unmounted')
    },
    onSubmit: event => {
      event.preventDefault();
      const cardData = cardForm.getCardFormData();
      console.log('CardForm data available: ', cardData)
    },
    onFetching: resource => {
      return () => {
        console.log('Fetching resource: ', resource)
      }
    }
  }
});

console.log(cardForm);