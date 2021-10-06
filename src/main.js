import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/slider.css';
import './assets/css/mobile.css';
import './assets/css/webkit.css';

const swal = require('sweetalert');
const emailjs = require('emailjs-com');

emailjs.init(process.env.USER);

const success = () => {
  swal({
    title: 'Tudo certo!',
    text: 'Email enviado com sucesso!',
    icon: 'success',
    button: 'ok'
  });
};

const error = () => {
  swal({
    title: 'Ooops...',
    text: 'Algo deu errado ;( Tente novamente daqui a pouco',
    icon: 'error',
    button: 'ok'
  });
};

// Slider Automático 

if (window.screen.width > 768) {
  let counter = 1;
  
  const TWENTYSECONDS = 20000;
  
  setInterval(() => {
    document.querySelector('#radio' + counter).checked = true;
    counter++;
    if(counter > 5) {
      counter = 1;
    }
  }, TWENTYSECONDS);
}

// Send Email

(function() {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const submit = document.querySelector('#submit');

  submit.addEventListener('click', e => {
    console.log(name, email, message);
    e.preventDefault();

    emailjs.send(process.env.SERVICE, process.env.TEMPLATE,{
      from_name: name.value,
      to_name: email.value,
      message: message.value,
    }).then(() => {
      success();
    }).catch((err) => {
      error();
    });
  });
})();
