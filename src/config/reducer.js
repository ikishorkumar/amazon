export const initialState = {
	cart: [],
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

		default:
			return state;
	}
};

export default reducer;
