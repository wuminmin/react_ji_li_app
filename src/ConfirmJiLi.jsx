import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

export default class ConfirmJiLi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>

                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>

                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>

                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        )
    }

}
