import React from "react";
import Post from "../../components/post";
import "../../assets/scss/main.scss";

export default class Main extends React.Component {
    render() {
        const posts = [
            {
                id: 1,
                title: "Title 1",
                subtitle: "Subtitle 1",
                content: "Content 1",
            },
            {
                id: 2,
                title: "Title 2",
                subtitle: "Subtitle 2",
                content: "Content 2",
            },
            {
                id: 3,
                title: "Title 3",
                subtitle: "Subtitle 3",
                content: "Content 3",
            },
            {
                id: 4,
                title: "Title 4",
                subtitle: "Subtitle 4",
                content: "Content 4",
            },
            {
                id: 5,
                title: "Title 5",
                subtitle: "Subtitle 5",
                content: "Content 5",
            },
        ];
        let render_posts = [];
        for (const [index, post] of posts.entries()) {
            console.log(index);
            render_posts.push(
                <Post
                    key={post.id}
                    title={post.title}
                    subtitle={post.subtitle}
                    content={post.content}
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
