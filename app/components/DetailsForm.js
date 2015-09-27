import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export class DetailsForm extends React.Component {

    static defaultProps = {
        name: '',
        twitter: '',
        onChange: null,
        notifyDelay: 500
    }

    state = {
        name: '',
        twitter: '',
        email: '',
        phone: '',
        avatar: '',
        facebook: ''
    }

    componentWillMount() {
        this.setState({
            name: this.props.name,
            twitter: this.props.twitter,
            email: this.props.email,
            phone: this.props.phone,
            avatar: this.props.avatar,
            facebook: this.props.facebook
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.facebook && !this.state.facebook) {
            this.setState({facebook: nextProps.facebook});
        }
        if (nextProps.avatar && !this.state.avatar) {
            this.setState({avatar: nextProps.avatar});
        }
        if (nextProps.name && !this.state.name) {
            this.setState({name: nextProps.name});
        }
    }

    onChange = propName => {
        return e => {
            var payload = {};
            payload[propName] = e.target.value;
            this.setState(payload);

            // delay notify
            clearTimeout(this._delay);
            this._delay = setTimeout(this.notifyChange, this.props.notifyDelay);
        }; 
    }

    notifyChange = () => {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    }

    render() {

        var { name, twitter, email, phone, avatar, facebook } = this.state;

        return (
            <div>
                <Input 
                    type="text" 
                    placeholder="Full name"
                    value={name} 
                    onChange={this.onChange('name')}/>

                <Input 
                    type="text" 
                    placeholder="Twitter account"
                    addonBefore="@"
                    value={twitter} 
                    onChange={this.onChange('twitter')}/>

                <Input 
                    type="text" 
                    placeholder="Email"
                    addonBefore={<Glyphicon glyph="envelope" />}
                    value={email} 
                    onChange={this.onChange('email')}/>

                <Input 
                    type="text" 
                    placeholder="Phone number"
                    addonBefore={<Glyphicon glyph="phone" />}
                    value={phone} 
                    onChange={this.onChange('phone')}/>

                <Input 
                    type="text" 
                    placeholder="Profile image (url)"
                    addonBefore={<Glyphicon glyph="picture" />}
                    value={avatar} 
                    onChange={this.onChange('avatar')}/>

                <Input 
                    type="text" 
                    placeholder="Facebook profile"
                    addonBefore={<Glyphicon glyph="user" />}
                    value={facebook} 
                    onChange={this.onChange('facebook')}/>
            </div>
        );
    }

}
