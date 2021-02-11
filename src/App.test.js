import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import toJson from 'enzyme-to-json';
describe("Rendering components", ()=>{
    it('renders App component without crashing', ()=>{
        shallow(<App />)
    });
    it('renders About component without crashing', ()=>{
        shallow(<About />)
    });
    it('renders Home component without crashing', ()=>{
        shallow(<Home />)
    });
    it('renders Contact component without crashing', ()=>{
        shallow(<Contact />)
    });
    it('renders NotFound component without crashing', ()=>{
        shallow(<NotFound />)
    });
});

describe("SnapShots", ()=>{
    it('App snapshots', ()=>{
        const appTree = shallow(<App />);
        expect(toJson(appTree)).toMatchSnapshot();
    });
    it('About snapshots', ()=>{
        const aboutTree = shallow(<About />);
        expect(toJson(aboutTree)).toMatchSnapshot();
    });
    it('Home snapshots', ()=>{
        const homeTree = shallow(<Home />);
        expect(toJson(homeTree)).toMatchSnapshot();
    });
    it('Contact snapshots', ()=>{
        const contactTree = shallow(<Contact />);
        expect(toJson(contactTree)).toMatchSnapshot();
    });
    it('NotFound snapshots', ()=>{
        const notFoundTree = shallow(<NotFound />);
        expect(toJson(notFoundTree)).toMatchSnapshot();
    });
})