import React, { Component } from 'react'
import { API, Storage } from 'aws-amplify'

export default class EventDetails extends Component {
    constructor(props) {
        super(props);

        this.file = null;

        this.state = {
            event: null,
            content: "",
            attachmentURL: null
        };
    }

    async componentDidMount() {
        try {
            let attachmentURL;
            const event = await this.getEvent();
            const { content, attachment } = event;

            if (attachment) {
                attachmentURL = await Storage.vault.get(attachment);
            }

            this.setState({
                event,
                content,
                attachmentURL
            });
        } catch (e) {
            alert (e);
        }
    }

    getEvent() {
        return API.get("events", `/event/${this.props.match.params.id}`);
    }

    render() {
        return <div className="container"></div>
    }
}