const init = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: localStorage.getItem("token") || undefined,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
