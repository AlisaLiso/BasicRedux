export default function reducer (state, action) {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        name: action.payload
      }

    case 'SET_DISPLAY_MODE':
      return {
        ...state,
        displayMode: action.payload
      }

    default:
      return state;
  }
}