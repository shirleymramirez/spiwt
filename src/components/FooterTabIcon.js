import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


class FooterTabIcon extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="apps" />
                            <Text>QR Code</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Order</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="navigate" />
                            <Text>Tech Support</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export { FooterTabIcon };
