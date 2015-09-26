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

        var { name, avatar, onConnect } = this.props;

        var avatarStyle = {
            backgroundImage: ['url(', (avatar || johnDoe), ')'].join('')
        };

        return (
            <div className="single-connect text-center" onClick={onConnect}>
                <img src={avatar || johnDoe} className="img-circle" width={160} height={160} />
                <span className="single-connect__name">{name}</span>
                <Button bsStyle="primary">
                    <Glyphicon glyph="plus" />
                    <span> </span>
                    Connect!
                </Button>
            </div>
        );
    }

}
