import React from "react";
import Post from "../../components/post";
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
        const posts = this.state.posts;
        let render_posts = [];
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            render_posts.push(
                <Post
                    key={index}
                    title={post.title}
                    userId={post.userId}
                    body={post.body}
                />
            );
        }
        return (
            <div className="container">
                <div className="content">{render_posts}</div>
            </div>
        );
    }
}
