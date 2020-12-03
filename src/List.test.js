import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const section = document.createElement('section');
        ReactDOM.render(<List header="Header" cards={["1", "2"]} />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List header="Header" cards={["1"]} key={1}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});