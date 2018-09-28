import saga from './game.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const gameSaga = saga;

export default asyncComponent(() => import('./game.container'));
