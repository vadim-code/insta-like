import { createMainSection } from './main-section';
import { createPhoneSection } from './phone-section';
import { createForm } from './create-form';
import { createInstallLinksSection } from './insta-link-block';

const root = document.getElementById('root');

const mainSection = createMainSection();
mainSection.appendChild(createPhoneSection());
const form = createForm();

form.appendChild(createInstallLinksSection());
mainSection.appendChild(form);

export const SIGN_IN = {
  render: function () {
    root.appendChild(mainSection);
    console.log('sign-in page rendered');
  },
  remove: function () {
    root.innerHTML = '';
    console.log('sign-in page removed');
  },
};

SIGN_IN.render();
