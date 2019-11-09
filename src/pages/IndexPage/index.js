import React,{Component} from 'react';
// import {Button} from 'antd';
import {connect} from 'react-redux';
class IndexPage extends Component{
    constructor(){
        super();
        this.state={
            userID:1
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>IndexPage</h2>
                <h2>{this.state.userID}</h2>
                <button type='primary'
                    onClick={this.props.changeTextHandler.bind(this)}
                >ChangeText</button>
            </div>
        )   
    }
    changeTextHandler(){
        console.log('1');
    }
}
const mapStateToProps=(store)=>({
    userID: store.userStore.num
})
const mapDispatchToProps=(dispatch)=>({
    changeTextHandler(){
        this.setState({
            userID:2
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);