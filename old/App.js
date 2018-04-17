import React from 'react'
import {Button,List} from 'antd-mobile'
class App extends React.Component {
    render() {
        let boss = '李云龙'
        return (
            <div>
                <h2>独立团，团长{boss}</h2>
                <One boss='张大喵'/>
                <QiBingLian boss='孙德胜'/>
            </div>
        )
    }
}

function QiBingLian(props) {
    return <h2>骑兵连连长{props.boss},冲啊！</h2>
}

class One extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            solders: ['虎子', '柱子', '王根生']
        }
    }

    addSolder() {
        console.log('hello add solder');
        this.setState({
            solders: [...this.state.solders, `新兵蛋子${Math.random()}`]
        })
    }

    render() {
        return (
            <div>
                <h2>一营，营长{this.props.boss}</h2>
                <Button type="primary" onClick={()=>this.addSolder()}>新近入伍</Button>
                <List renderHeader={()=>'士兵列表'}>
                    {
                        this.state.solders.map(v => {
                            return <List.Item key={v}>{v}</List.Item>
                        })
                    }
                </List>
                <ul>
                    {
                        this.state.solders.map(v => {
                            return <li key={v}>{v}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App