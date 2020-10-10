export const initialState = {
  user: null,
  avatar:
    "https://th.bing.com/th/id/OIP.zhH7yEHEXulHpIv2PhcHuQAAAA?w=217&h=180&c=7&o=5&pid=1.7"
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        avatar: action.avatar
      };
    default:
      return state;
  }
};

export default reducer;
