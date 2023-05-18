let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === "contactAdded") {
    return [
      ...state,
      {
        id: ++lastId,
        contactName: action.payload.contactName,
        mobileNumber: action.payload.mobileNumber,
        isBlocked: false
      }
    ];
  } else if (action.type === "contactRemoved") {
    return state.filter((contact) => contact.id !== action.payload.id);
  }
  return state;
}
