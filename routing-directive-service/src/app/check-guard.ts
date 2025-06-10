import { CanDeactivateFn } from '@angular/router';
import { Home } from './home/home';

export const checkGuard: CanDeactivateFn<Home> = (component, currentRoute, currentState, nextState) => {
  var result = confirm("Sayfadan çıkmak istiyor musunuz?");
  return result;
};
