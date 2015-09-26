import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

var johnDoe = require('assets/john-doe.png');

export class ConnectionDetails extends React.Component {

    static defaultProps = {
        name: 'John Doe',
        avatar: null,
        onRemove: null
    }

    render() {
        console.log(this.props);
        var { name, avatar, twitter, fbUrl, onRemove } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        name = name || 'John Doe';

        var fb, tw, twUrl;
        if (fbUrl) {
            fb = <Button bsStyle="primary" href={fbUrl} target="_blank">Ping in Facebook</Button>;
        }

        if (twitter) {
            twUrl = 'http://twitter.com/' + twitter;
            tw = (
                <p className="connection-details__info">
                    <a href={twUrl} target="_blank">@{twitter}</a>
                </p>
            );
        }

        return (
            <div className="connection-details text-center">
                <img src={avatar || johnDoe} className="img-circle" width={160} height={160} />
                <span className="connection-details__name">{name}</span>
                {tw}
                {fb}
                {/*
                <Button bsStyle="danger" onClick={onRemove}>
                    <Glyphicon glyph="trash" />
                    <span> </span>
                    Remove
                </Button>
                */}
            </div>
        );
    }

}
