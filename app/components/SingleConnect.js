import React from 'react';
import Button from 'react-bootstrap/lib/Button';

var johnDoe = require('assets/john-doe.png');

export class SingleConnect extends React.Component {

    static defaultProps = {
        name: 'John Doe',
        avatar: null,
        onConnect: null
    }

    render() {

        var { name, avatar, onConnect } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        return (
            <div className="single-connect text-center">
                <span className="single-connect__avatar" style={avatarStyle} />
                <span className="single-connect__name">{name}</span>
                <hr />
                <Button bsStyle="primary" onClick={onConnect}>Connect!</Button>
            </div>
        );
    }

}
