import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

var johnDoe = require('assets/john-doe.png');

export class SingleConnect extends React.Component {

    static defaultProps = {
        name: 'John Doe',
        avatar: null,
        onConnect: null
    }

    render() {

        var { name, avatar, fbUrl, twitter, onConnect } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        var fb, tw, twUrl;
        if (fbUrl) {
            fb = <Button bsStyle="primary" href={fbUrl} target="_blank">Ping in Facebook</Button>;
        }

        if (twitter) {
            twUrl = 'http://twitter.com/' + twitter;
            tw = (
                <p className="connection-details__info">
                    @{twitter}
                </p>
            );
        }

        return (
            <div className="single-connect text-center" onClick={onConnect}>
                <img src={avatar || johnDoe} className="img-circle" width={160} height={160} />
                <span className="single-connect__name">{name}</span>
                {tw}
                <Button bsStyle="primary">
                    <Glyphicon glyph="plus" />
                    <span> </span>
                    Connect!
                </Button>
            </div>
        );
    }

}
