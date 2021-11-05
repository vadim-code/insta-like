import { createRoute } from './routes/index';
import { APP_ROUTES } from './routes/routes';
import { SIGN_IN } from './sign-in';

<<<<<<< HEAD
const root = document.getElementById('root');
const router = createRoute(APP_ROUTES, root);

=======
export let router = null;

const root = document.getElementById('root');
router = createRoute(APP_ROUTES, root);

>>>>>>> fb3545e31aa0f33fe0aa5890c05103a47d73adef
router.go('sign-in');
