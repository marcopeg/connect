import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Well from 'react-bootstrap/lib/Well';

var johnDoe = require('assets/john-doe.png');

export class ConnectionDetails extends React.Component {

    static defaultProps = {
        name: 'John Doe',
        avatar: null,
        onRemove: null
    }

    render() {
        console.log(this.props);
        var { name, avatar, twitter, facebook, phone, email, notes, onRemove } = this.props;

        // name = name || 'John Doe';

        var fb, tw, twUrl, fbUrl;

        if (twitter) {
            twUrl = 'http://twitter.com/' + twitter;
            tw = (
                <p className="connection-details__info">
                    <a href={twUrl} target="_blank">@{twitter}</a>
                </p>
            );
        }

        if (facebook) {
            fbUrl = 'http://facebook.com/' + facebook;
            fb = (
                <p className="connection-details__info">
                    <Button bsStyle="primary" href={fbUrl} target="_blank">Ping in Facebook</Button>
                </p>
            );
        }

        if (phone) {
            var phoneUrl = 'tel:' + phone;
            phone = (
                <p className="lead">
                    <Glyphicon glyph="phone" /> <a href={phoneUrl}>{phone}</a>
                </p>
            );
        }

        if (email) {
            var emailUrl = 'mailto:' + email;
            email = (
                <p className="lead">
                    <Glyphicon glyph="envelope" /> <a href={emailUrl}>{email}</a>
                </p>
            );
        }

        if (notes) {
            notes = <div><p className="lead">{notes}</p><hr /></div>;
        }

        return (
            <div className="connection-details text-center">
                <img src={avatar || johnDoe} className="img-circle" width={160} height={160} />
                <span className="connection-details__name">{name}</span>
                {notes}
                {tw}
                {phone}
                {email}
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
