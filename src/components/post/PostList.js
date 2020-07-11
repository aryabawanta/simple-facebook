import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/main.scss";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ posts: nextProps.posts });
    }

    render() {
        const posts = this.state.posts;
        let render_posts = [];
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            render_posts.push(
                <div key={index} className="posts">
                    <div className="posts__header">
                        <div className="posts__header__title">{post.title}</div>
                        <div className="posts__header__subtitle">
                            user id : {post.userId}
                        </div>
                    </div>
                    <div className="posts__content">{post.body}</div>
                    <div className="posts__footer">
                        <NavLink to={`/edit/${post.id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </NavLink>
                    </div>
                </div>
            );
        }
        return <div>{render_posts}</div>;
    }
}
