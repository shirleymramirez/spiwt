import React, { Component } from 'react';
import { Drawer, Container } from 'native-base';
import { ToolBar } from './ToolBar';
import { SideBar } from './SideBar';


class ControlPanel extends Component {
    
    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };
    
    render() {
        return (
            <Container>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar />}
                    onClose={() => this.closeDrawer()} >
                </Drawer>
                <ToolBar openDrawer={this.openDrawer.bind(this)} />
            </Container>
        );
    };
};


export { ControlPanel };