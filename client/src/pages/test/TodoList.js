import React,{Component} from "react";
import { actionCreators } from './store';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import TodoUI from "./TodoUI";

class TodoList extends Component{
    render() {
        return (
            <TodoUI zip={this.props.zip}
                    year={this.props.year}
                    predominant={this.props.predominant}
                    handleInputChange={this.props.handleInputChange}
                    handleClick={this.props.handleClick}
                    list={this.props.list}
            />

        );
    }

    componentDidMount() {
        this.props.init();
    }
}

const mapState = (state) => ({
    list: state.get("test").list,
    zip: state.get("test").zip,
    year: state.get("test").year,
    predominant: state.get("test").predominant,
})

const mapDispatch = (dispatch) => ({
    init(){
    },
    handleClick(zip,predominant,year) {
        dispatch(actionCreators.doSearch(zip,predominant,year));
    },
    handleInputChange(e) {
        dispatch(actionCreators.getInputChangeAction(e.target.id,e.target.value));
    }
});

export default connect(mapState, mapDispatch)(TodoList);
