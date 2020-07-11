import React from "react";
import "../../assets/scss/main.scss";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            userId: props.userId,
            body: props.body,
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
                        user id : {this.state.userId}
                    </div>
                </div>
                <div className="posts__content">{this.state.body}</div>
            </div>
        );
    }
}
