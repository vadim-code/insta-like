document.addEventListener('DOMContentLoaded', function (event) {
  const root = document.getElementById('root');

  function createMainSection() {
    const mainSection = document.createElement('main');
    mainSection.classList.add('main');
    return mainSection;
  }

  function createPhoneSection() {
    const mainPhones = document.createElement('section');
    mainPhones.classList.add('main__phones');
    mainPhones.appendChild(createIPhoneBackground());

    function createIPhoneBackground() {
      const mainPicture = document.createElement('div');
      mainPicture.classList.add('main__picture');

      const img = document.createElement('img');
      img.src = './img/insta-like-register-page.png';

      mainPicture.appendChild(img);

      mainPicture.appendChild(createImagesContainer());

      return mainPicture;
    }

    function createImagesContainer() {
      const imagesContainer = document.createElement('div');
      imagesContainer.classList.add('images-container');

      imagesContainer.appendChild(createImages());
      return imagesContainer;
    }

    function createImages() {
      let divWithImages = document.createElement('div');
      divWithImages.classList.add('images-containerr');

      const images = [
        'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg',
      ];

      images.forEach((img) => {
        const image = document.createElement('img');
        image.src = img;
        image.classList.add('common-image');

        divWithImages.appendChild(image);
      });

      divWithImages.childNodes[0].classList.add('active-image');

      return divWithImages;
    }

    const imagesCollection = createImages().childNodes;

    function phoneScreensSlideShow(i) {
      if (i >= imagesCollection.length) {
        i = 1;
      }
      imagesCollection[i].classList.add('active-image');
      setTimeout(() => {
        imagesCollection[i].classList.remove('active-image');
        i++;
        phoneScreensSlideShow(i);
      }, 2000);
    }

    phoneScreensSlideShow(1);

    return mainPhones;
  }

  function formInputConstructor(inputProperties, className) {
    const input = document.createElement('input');

    Object.keys(inputProperties).forEach((propertyName) => {
      input[propertyName] = inputProperties[propertyName];
    });

    input.classList.add(className);

    return input;
  }

  function createForm() {
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

        console.log(values);
      });

      return formRegistration;
    }

    const formMainDiv = createGlobalFormWrapper();
    formMainDiv.appendChild(makeForm());
    return createGlobalFormWrapper();
  }

  function photoGenerator(src) {
    let img = document.createElement('img');
    img.src = src;
    return img;
  }

  function createInstallLinksSection() {
    function createInstallWrapper() {
      const installApp = document.createElement('section');
      installApp.classList.add('install__app');

      installApp.appendChild(createInstallHeading());
      installApp.appendChild(createImagesContainer());

      return installApp;
    }

    function createInstallHeading() {
      const installHeading = document.createElement('div');
      const installHeadingP = document.createElement('p');
      installHeadingP.innerHTML = 'установите приложение';
      installHeading.classList.add('install__heading');

      installHeading.appendChild(installHeadingP);
      return installHeading;
    }

    function createImagesContainer() {
      const imagesContainer = document.createElement('div');
      imagesContainer.classList.add('install__pictures');

      imagesContainer.appendChild(createInstallAppleLinkPhoto());
      imagesContainer.appendChild(createInstallGoogleLinkPhoto());

      return imagesContainer;
    }

    function createInstallAppleLinkPhoto() {
      const appleLink = document.createElement('a');
      const applePic = photoGenerator('./img/appl.ing.png');
      appleLink.classList.add('install__apple');

      appleLink.appendChild(applePic);
      return appleLink;
    }

    function createInstallGoogleLinkPhoto() {
      const googleLink = document.createElement('a');
      const googlePic = photoGenerator('./img/gp-img.png');
      googleLink.appendChild(googlePic);

      googleLink.classList.add('install__googleplay');
      return googleLink;
    }

    return createInstallWrapper();
  }

  const mainSection = createMainSection();
  mainSection.appendChild(createPhoneSection());
  const form = createForm();

  form.appendChild(createInstallLinksSection());
  mainSection.appendChild(form);
  // root.appendChild(mainSection);

  const controlSystem = {
    startRegisterPage: function () {
      return root.appendChild(mainSection);
    },
    clearAllContent: function () {
      return (root.innerHTML = '');
    },
  };

  controlSystem.startRegisterPage();
});
