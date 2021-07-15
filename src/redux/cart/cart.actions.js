import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// Note: Since payload is optional property on our action object so i'm not using it here since I did not use it in cart.reducer. See user.reducer and user.actions for payload property.
