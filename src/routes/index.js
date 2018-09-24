import withAuth from 'Src/enhancers/withAuth';
import Login from './Login';
import Game from './Game';

export default [
  {
    name: 'Login',
    pathname: '/login',
    component: withAuth(Login, false)
  },
  {
    name: 'Game',
    pathname: '*',
    component: withAuth(Game)
  }
];
