export function createPhoneSection() {
  const mainPhones = document.createElement('section');
  mainPhones.classList.add('main__phones');
  const createdImages = createImages();
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

    imagesContainer.appendChild(createdImages);
    return imagesContainer;
  }

  function createImages() {
    let divWithImages = document.createElement('div');
    divWithImages.classList.add('images-containerr');

    const images = [
      require('../images/screenshot-1.jpeg'),
      require('../images/screenshot-2.jpeg'),
      require('../images/screenshot-3.jpeg'),
      require('../images/screenshot-4.jpeg'),
      require('../images/screenshot-5.jpeg'),
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

  const imagesCollection = createdImages.childNodes;

  function phoneScreensSlideShow(i) {
    if (i >= imagesCollection.length) {
      i = 0;
    }

    imagesCollection[i].classList.add('active-image');
    let timeout = setTimeout(() => {
      imagesCollection[i].classList.remove('active-image');
      i++;
      phoneScreensSlideShow(i);
    }, 2000);

    return {
      stop: function () {
        clearTimeout(timeout);
      },
    };
  }

  phoneScreensSlideShow(1);

  return mainPhones;
}
