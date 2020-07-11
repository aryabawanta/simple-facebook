import React from "react";
import "../../assets/scss/main.scss";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            content: props.content,
            edit: false,
        };
    }

    render() {
        return (
            <div className="posts">
                <div className="posts__header">
                    <div className="posts__header__title">
                        {this.state.title}
                    </div>
                    <div className="posts__header__subtitle">
                        {this.state.subtitle}
                    </div>
                </div>
                <div className="posts__content">{this.state.content}</div>
            </div>
        );
    }
}
