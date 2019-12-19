import React,{Component} from "react";
import { actionCreators } from './store';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import TodoUI from "../test/TodoUI";

class Home extends Component{
    render() {
        return (
            <TodoUI inputValue={this.props.inputValue}
                    handleInputChange={this.props.handleInputChange}
                    handleClick={this.props.handleClick}
                    handleItemDelete={this.props.handleItemDelete}
                    list={this.props.list}
            />

        );
    }

    componentDidMount() {
        this.props.init();
    }
}

const mapState = (state) => ({
    inputValue: state.get("test").inputValue,
    list: state.get("test").list
})

const mapDispatch = (dispatch) => ({
    init(){
        dispatch(actionCreators.getTodoList())
    },
    handleInputChange(e) {

        dispatch(actionCreators.getInputChangeAction(e.target.value));
    },
    handleClick() {
        dispatch(actionCreators.addItemAction());
    },
    handleItemDelete(index) {
        dispatch(actionCreators.delItemAction(index));
    }
});

export default connect(mapState, mapDispatch)(Home);
