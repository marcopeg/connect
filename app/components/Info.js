import React from 'react';

import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Well from 'react-bootstrap/lib/Well';

export class Info extends React.Component {

    render() {

        return (
            <div className="text-center">
                <p className="lead">
                    <i>
                        This app was hacked in few hours after party the whole night
                        at <b>JSConf15</b>.
                    </i>
                    <br /><br />
                    Please <b>forgive the authors</b> if it <br />
                    doesn't work properly: <Label bsStyle="warning">It works on my machine!</Label>
                </p>
                <p className="lead">
                    <a href="http://twitter.com/thepeg" target="_blank">@thepeg</a>
                    <span> - </span>
                    <a href="http://twitter.com/fifiolka" target="_blank">@fifiolka</a>
                </p>
            </div>
        );
    }

}
