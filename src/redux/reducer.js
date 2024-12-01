const initialState = {
  nums: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, nums: (state.nums += 1) };
  } else if (action.type === "DECREMENT") {
    if (state.nums < 1) return { nums: (state.nums = 0) };
    return { ...state, nums: (state.nums -= 1) };
  } else if (action.type === "INCREMENT10") {
    return { ...state, nums: (state.nums += 10) };
  } else if (action.type === "DECREMENT10") {
    if (state.nums < 1) return { nums: (state.nums = 0) };
    return { ...state, nums: (state.nums -= 10) };
  } else if (action.type === "RESET") {
    return { ...state, nums: (state.nums = 0) };
  }
  return state;
};

export default reducer;
