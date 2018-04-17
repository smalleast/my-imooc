import React from 'react'
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux'
import {Button,Flex} from 'antd-mobile'
@connect(
    state => ({name: state.counter}),
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <Flex>
                    <Flex.Item>
                        <Button type="primary" onClick={this.props.addGun}>申请武器</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button type="primary"  onClick={this.props.removeGun}>上交武器</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button type="primary"  onClick={this.props.addGunAsync}>拖两天再给</Button>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}

export default App