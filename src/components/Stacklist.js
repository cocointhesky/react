import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import stacks from '../data/stacks.json';
import {setStack,loadStacks} from '../actions';
import {connect} from 'react-redux';
class Stacklist extends Component
{
    componentDidMount(){
        if(this.props.stacks.length===0) this.props.loadStacks(stacks);
    }
    render(){
        console.log('stacklist props',this.props);
        return(
            <div>
                {
                    this.props.stacks.map(stack=>{
                        return(
                        <Link 
                            to='/stack'
                            key={stack.id}
                            onClick={()=>this.props.setStack(stack)}
                        >
                            <h4>{stack.title}</h4>
                        </Link>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {stacks:state.stacks};
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({setStack},dispatch);
// } 
// dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
// const connectComponent=connect(null,mapDispatchToProps);
// export default connectComponent(Stacklist);
export default connect(mapStatetoProps,{setStack,loadStacks})(Stacklist);
// The connect() function connects a React component to a Redux store.
// With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

// By default, a connected component receives props.dispatch and can dispatch actions itself.
// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.