// open - close script

 document.querySelector('.oder__button').addEventListener('click', () => {
      document.querySelector('.form-oder').className = 'form-oder is-hidden';
    });

    document.querySelector('.open-button').addEventListener('click', () => {
      document.querySelector('.form-oder').className = 'form-oder';
    });

    document.querySelector('.open-button2').addEventListener('click', () => {
      document.querySelector('.form-oder').className = 'form-oder';
    });

    document
      .querySelector('.oder-form__buton--close')
      .addEventListener('click', () => {
        document.querySelector('.form-oder').className = 'form-oder is-hidden';
      });

    document.querySelector('.open-button').addEventListener('click', () => {
      document.querySelector('.form-oder').className = 'form-oder';
    });


// calculation

const q499 = document.getElementById('499');
    const q799 = document.getElementById('799');
    const q999 = document.getElementById('999');

    const s499 = document.getElementById('499x');
    const s799 = document.getElementById('799x');
    const s999 = document.getElementById('999x');

    const total = document.getElementById('total');

    q499.addEventListener('input', () => {
      console.log('amount = ', q499.value);
      console.log('sum = ', 4.99 * q499.value);
      s499.value = (4.99 * q499.value).toFixed(2);
      total.value =
        Number(s499.value) + Number(s799.value) + Number(s999.value);
    });
    q799.addEventListener('input', () => {
      console.log('amount = ', q799.value);
      console.log('sum = ', 7.99 * q799.value);
      s799.value = (7.99 * q799.value).toFixed(2);
      total.value =
        Number(s499.value) + Number(s799.value) + Number(s999.value);
    });
    q999.addEventListener('input', () => {
      console.log('amount = ', q999.value);
      console.log('sum = ', 9.99 * q999.value);
      s999.value = (9.99 * q999.value).toFixed(2);
      total.value =
        Number(s499.value) + Number(s799.value) + Number(s999.value);
    });