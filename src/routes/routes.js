import { SIGN_IN } from '../sign-in';
import { createRoute } from '../routes/index';

export const APP_ROUTES = [
  {
    title: 'Instagram | Sign In Page',
    id: 'sign-in',
    url: '/sign-in',
    page: SIGN_IN,
  },
  {
    title: 'home',
    id: 'home',
    url: '/',
    page: {
      render: function () {
        console.log('home page rendered');
      },
      remove: function () {
        console.log('home page removed');
      },
    },
  },
];
