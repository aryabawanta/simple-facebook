import axios from "axios";

export function getPosts() {
    return async (dispatch) => {
        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/"
        );

        dispatch({ type: "GET_POSTS", payload: response.data });
    };
}
