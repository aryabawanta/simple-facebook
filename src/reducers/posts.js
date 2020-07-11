const posts = (state, action) => {
    if (!state) state = [];
    switch (action.type) {
        case "GET_POSTS":
            return action.payload;
        default:
            return state;
    }
};

export default posts;
