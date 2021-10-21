document.addEventListener('DOMContentLoaded', function (event) {
  const root = document.getElementById('root');
  const main = document.createElement('main');
  main.classList.add('main');
  root.appendChild(main);

  function createPhoneSection() {
    const mainPhones = document.createElement('section');
    mainPhones.classList.add('main__phones');

    const mainPicture = document.createElement('div');
    mainPicture.classList.add('main__picture');

    const img = document.createElement('img');
    img.src = './img/insta-like-register-page.png';

    mainPicture.appendChild(img);
    mainPhones.appendChild(mainPicture);
    main.appendChild(mainPhones);
  }

  function createForm() {
    const formMainDiv = document.createElement('div');
    formMainDiv.classList.add('global-form');

    const form = document.createElement('article');
    form.classList.add('form');

    const formWrapper = document.createElement('div');
    formWrapper.classList.add('form-wrapper');

    const instagramLogo = document.createElement('h1');
    instagramLogo.classList.add('form__heading');
    instagramLogo.innerHTML = 'instagram';

    const formRegistration = document.createElement('div');
    formRegistration.classList.add('form__log');

    const submitButton = document.createElement('button');
    submitButton.classList.add('form__button');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'войти';

    const formEmail = document.createElement('input');
    formEmail.classList.add('form__email');
    formEmail.type = 'email';
    formEmail.placeholder = 'Эл. адрес';

    const passwordInput = document.createElement('input');
    passwordInput.classList.add('form__password');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Пароль';

    const installApp = document.createElement('section');
    installApp.classList.add('install__app');
    const installHeading = document.createElement('div');
    const installHeadingP = document.createElement('p');
    installHeadingP.innerHTML = 'установите приложение';
    installHeading.appendChild(installHeadingP);
    installHeading.classList.add('install__heading');

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('install__pictures');

    const appleAppInstall = document.createElement('a');
    appleAppInstall.classList.add('install__apple');
    const appleAppPic = document.createElement('img');
    appleAppPic.src = './img/appl.ing.png';

    const googleAppInstall = document.createElement('a');
    googleAppInstall.classList.add('install__googleplay');
    const googleAppPic = document.createElement('img');
    googleAppPic.src = './img/gp-img.png';

    formMainDiv.appendChild(form);
    installApp.appendChild(installHeading);
    appleAppInstall.appendChild(appleAppPic);
    installApp.appendChild(imagesContainer);
    formMainDiv.appendChild(installApp);
    formRegistration.appendChild(formEmail);
    formRegistration.appendChild(passwordInput);
    formRegistration.appendChild(submitButton);
    formWrapper.appendChild(instagramLogo);
    formWrapper.appendChild(formRegistration);
    form.appendChild(formWrapper);
    imagesContainer.appendChild(googleAppInstall);
    imagesContainer.appendChild(appleAppInstall);
    googleAppInstall.appendChild(googleAppPic);
    main.appendChild(formMainDiv);
  }

  function render() {
    createPhoneSection();
    createForm();
  }

  render();
});
