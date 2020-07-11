import React from "react";
import PostList from "../../components/post/PostList";
import { Switch, Route } from "react-router-dom";
import "../../assets/scss/main.scss";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ posts: nextProps.posts });
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <PostList posts={this.state.posts} />
                        </Route>
                        <Route path="/edit/:id">
                            <div>Edit</div>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
