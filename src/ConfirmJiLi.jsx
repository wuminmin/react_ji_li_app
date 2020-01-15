import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
// import MenuExample from './MenuExample';
import JiLiMenu from './JiLiMenu';

export default class ConfirmJiLi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: true,
            table_of_Contents: [
                {
                    "新闻标题列表": [
                        { "标题": "激励培训测试" },
                        { "标题": "两节移动规模提升活动激励" }
                    ],
                    "月份": "2020年1月"
                }, {
                    "新闻标题列表": [
                        { "标题": "元旦激励" }],
                    "月份": "2019年12月"
                }],
            table_of_data:[],

        };
    }

    render() {
        return (
            <div>

                <JiLiMenu></JiLiMenu>
                {/* <MenuExample></MenuExample> */}
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
