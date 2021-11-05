import { formInputConstructor } from './form-costructor';
<<<<<<< HEAD
=======
import { router } from '../src/index';
>>>>>>> fb3545e31aa0f33fe0aa5890c05103a47d73adef

export function createForm() {
  function createGlobalFormWrapper() {
    const formMainDiv = document.createElement('div');
    formMainDiv.classList.add('global-form');

    formMainDiv.appendChild(makeForm());
    return formMainDiv;
  }

  function makeForm() {
    const form = document.createElement('article');
    form.classList.add('form');

    form.appendChild(createFormInsides());

    return form;
  }

  function createFormInsides() {
    const formIsides = document.createElement('div');
    formIsides.classList.add('form-wrapper');

    formIsides.appendChild(createFormLogo());
    formIsides.appendChild(createInputsConstainer());
    return formIsides;
  }

  function createFormLogo() {
    const instagramLogo = document.createElement('h1');
    instagramLogo.classList.add('form__heading');
    instagramLogo.innerHTML = 'instagram';
    return instagramLogo;
  }

  const formEmail = formInputConstructor(
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    'form__email'
  );
  const passwordInput = formInputConstructor(
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
    },
    'form__password'
  );

  const submitButton = formInputConstructor(
    {
      value: 'Login',
      type: 'submit',
    },
    'form__button'
  );

  function createInputsConstainer() {
    const formRegistration = document.createElement('form');
    formRegistration.classList.add('form__log');
    formRegistration.appendChild(formEmail);

    formRegistration.appendChild(passwordInput);
    formRegistration.appendChild(submitButton);

    formRegistration.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputs = event.target.querySelectorAll(
        'input[type=email] , input[type=password]'
      );

      const values = {};

      inputs.forEach((input) => {
        values[input.name] = input.value;
      });

      let root = document.getElementById('root');

      inputs.forEach((input) => {
        if (input.value !== undefined) {
<<<<<<< HEAD
          root.innerHTML = '';
=======
          router.go('home');
>>>>>>> fb3545e31aa0f33fe0aa5890c05103a47d73adef
        }
      });

      console.log(values);
    });

    return formRegistration;
  }

  const formMainDiv = createGlobalFormWrapper();
  formMainDiv.appendChild(makeForm());
  return createGlobalFormWrapper();
}
