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

        var { name, avatar, onRemove } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        name = name || 'John Doe';

        return (
            <div className="connection-details text-center">
                <img src={avatar || johnDoe} className="img-circle" width={160} height={160} />
                <span className="connection-details__name">{name}</span>
                <p className="connection-details__info">... other details ...</p>
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
