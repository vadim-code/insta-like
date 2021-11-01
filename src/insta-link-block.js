import { photoGenerator } from '../util';

export function createInstallLinksSection() {
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
