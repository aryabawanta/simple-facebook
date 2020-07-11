import { connect } from "react-redux";

import App from "../components/App";
import { getPosts } from "../actions";

function mapStateToProps(state) {
    return {
        posts: state.posts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetPosts: () => {
            dispatch(getPosts());
        },
    };
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
