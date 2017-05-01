export const initialState = {
  tagGroups: {},
  productItemKeys: []
}

export default function commonReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TAG_GROUPS':
      return {...state, tagGroups: payload}
    case 'SET_PRODUCT_ITEM_ATTRIBUTES':
      return {...state, productItemKeys: payload}
    default:
      return state;
  }
}
