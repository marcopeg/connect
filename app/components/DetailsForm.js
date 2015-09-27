import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export class DetailsForm extends React.Component {

    static defaultProps = {
        name: '',
        twitter: '',
        onChange: null,
        notifyDelay: 500
    }

    state = {
        name: '',
        twitter: ''
    }

    componentWillMount() {
        this.setState({
            name: this.props.name,
            twitter: this.props.twitter
        });
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

        var { name, twitter } = this.state;

        return (
            <div>
                <h4>About Me:</h4>
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
            </div>
        );
    }

}
