import React from 'react';
import { MultiConnectItem } from 'components/MultiConnectItem';

const fixture = {
    items: [{
        id: 'x1',
        name: 'marco peg',
        avatar: 'https://pbs.twimg.com/profile_images/552549894376812544/xlUhrECS.jpeg'
    },{
        id: 'x2',
        name: 'filip fiolka',
        avatar: 'https://avatars1.githubusercontent.com/u/6086938?v=3&s=460'
    },{
        id: 'x3',
        name: 'Silvia Trevellin',
        avatar: 'https://pbs.twimg.com/profile_images/441127801274396672/JviwmuEF_400x400.jpeg'
    }]
};

export class MultiConnect extends React.Component {

    static defaultProps = {
        items: fixture.items,
        onConnect: null
    }

    connect = item => {
        if (this.props.onConnect) {
            this.props.onConnect(item);
        }
    }

    render() {

        var { items, onConnect } = this.props;

        var items = this.props.items.map(item => (
            <li key={item.id}>
                <MultiConnectItem {...item} onConnect={$=>this.connect(item)} />
            </li>
        ));

        return (
            <ul className="list-unstyled">
                {items}
            </ul>
        );
    }

}
