import withAuth from 'Src/enhancers/withAuth';
import Login from './Login';
import Register from './Register';
import Game from './Game';
import ForgotPassword from './ForgotPassword';
import SetPassword from './SetPassword';

export default [
  {
    name: 'Login',
    pathname: '/login',
    component: withAuth(Login, false)
  },
  {
    name: 'Register',
    pathname: '/register',
    component: withAuth(Register, false)
  },
  {
    name: 'ForgotPassword',
    pathname: '/forgotpassword',
    component: withAuth(ForgotPassword, false)
  },
  {
    name: 'SetPassword',
    pathname: '/setpassword',
    component: withAuth(SetPassword, false)
  },
  {
    name: 'Game',
    pathname: '*',
    component: withAuth(Game)
  }
];
