import { createRoute } from './routes/index';
import { APP_ROUTES } from './routes/routes';
import { SIGN_IN } from './sign-in';

export let router = null;

const root = document.getElementById('root');
router = createRoute(APP_ROUTES, root);

router.go('sign-in');
