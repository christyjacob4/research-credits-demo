import React from 'react';
import { MenuItem, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

import '../styles/header.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedNavKey: 0
        };
    }

    componentDidMount() {
        const path = this.props.route.path;

        this.setState({
            selectedNavKey: this.getNavKeyByRoutePath(path)
        })
    }

    getNavKeyByRoutePath(path) {
        switch (path) {
            case '/' :
                return 1;
            case '/basic' :
                return 2.1;
            case '/hint' :
                return 2.2;
            case '/responsive-images' :
                return 2.3;
            case '/dimensions' :
                return 2.4;
            case '/react-slick' :
                return 2.5;
            case '/external' :
                return 2.6;
            case '/lens' :
                return 2.7;
            case '/image-magnify' :
                return 3.1;
            case '/support' :
                return 4;
            default :
                return 1;
        }
    }

    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo" href="#/">
                            Research Credits
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav {...{activeKey: this.state.selectedNavKey}}>
                        <NavItem eventKey={1} href="#/">Home</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
