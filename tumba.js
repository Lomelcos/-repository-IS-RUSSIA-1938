document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number-input');
    const cardHolderInput = document.getElementById('card-holder-input');
    const cardExpiryMonth = document.getElementById('date-input');
    const cardExpiryYear = document.getElementById('date-input');
    const cardCvvInput = document.getElementById('cvv-input');
    const cardForm = document.getElementById('form-container');

    const cardNumber = document.getElementById('card-number');
    const cardHolder = document.getElementById('card-holder');
    const cardExpiry = document.getElementById('date');
    const cardCvv = document.getElementById('cvv');
    const card = document.getElementById('gf');

    cardNumberInput.addEventListener('input', () => {
        let value = cardNumberInput.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
        if (value.length > 16) {
            value = value.substring(0, 16);
        }
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
        cardNumber.textContent = formattedValue ? formattedValue : '1234 **** **** 2355';
    });

    cardHolderInput.addEventListener('input', () => {
        cardHolder.textContent = cardHolderInput.value.trim() || 'Имя Фамилия';
    });

    cardExpiryMonth.addEventListener('change', updateExpiryDate);
    cardExpiryYear.addEventListener('change', updateExpiryDate);

    function updateExpiryDate() {
        const month = cardExpiryMonth.value;
        const year = cardExpiryYear.value.substring(2, 4);
        cardExpiry.textContent = (month && year) ? `${month}/${year}` : 'MM/YY';
    }

    cardCvvInput.addEventListener('input', () => {
        cardCvv.textContent = cardCvvInput.value.replace(/[^0-9]/g, '').substring(0, 3) || 'CVV';
    });

    cardCvvInput.addEventListener('focus', () => {
        card.classList.add('flip');
    });

    cardCvvInput.addEventListener('blur', () => {
        card.classList.remove('flip');
    });



  
});
