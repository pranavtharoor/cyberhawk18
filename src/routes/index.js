import withAuth from 'Src/enhancers/withAuth';
import Login from './Login';
import Register from './Register';
import Game from './Game';

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
    name: 'Game',
    pathname: '*',
    component: withAuth(Game)
  }
];
