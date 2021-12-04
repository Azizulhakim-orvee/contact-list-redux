const initialState = [
  {
    id: 0,
    name: "Azizul Hakim",
    email: "azizulhakim.0212@gmail.com",
    number: "01622196929",
  },
  {
    id: 1,
    name: "Tonmoy Saha",
    email: "tonmoysaha885@gmail.com",
    number: "01716960738",
  },
  {
    name: "Elon Musk",
    email: "ceo@tesla.com",
    number: "00006900000"
  }
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const fiterContacts = state.filter(
        (contact) => contact.id !== action.payload
      );
      state = fiterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
