import { createMainSection } from './main-section';
import { createPhoneSection } from './phone-section';
import { createForm } from './create-form';
import { createInstallLinksSection } from './insta-link-block';

document.addEventListener('DOMContentLoaded', function (event) {
  const root = document.getElementById('root');

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
