export const initialState = {
	cart: [],
	user: null,
};
const addToCart = 'ADD_TO_CART';
const removefromCart = 'REMOVE_FROM_CART';
// slector
export const getTotalCart = (cart) =>
	cart?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
	switch (action.type) {
		case addToCart:
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		case removefromCart:
			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.id
			);

			let newCart = [...state.cart];

			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
				console.warn(
					`can not remove the product (id: ${action.id}) item not found`
				);
			}

			return {
				...state,
				cart: newCart,
			};

		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
