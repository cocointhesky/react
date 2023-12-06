import React, {Component} from 'react';
import {connect} from'react-redux';
import {Link} from 'react-router-dom';
import Card from './Card';
class Stack extends Component {
    render(){
        // console.log('stack props',this.props);
        const {title,cards}=this.props.stack;
        return(
            <div>
                <Link className="link-home" to='/'>
                    <h4>Home</h4>
                </Link>
                {/* <h3>{this.props.stack.title}</h3> */}
                <h3>{title}</h3>
                <br />
                {
                    this.props.stack.cards.map(card=>{
                        return(
                            // <div key={card.id}>
                            //     {card.prompt}
                            // </div>
                            <Card key={card.id} card={card}/>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state',state);
    return {stack:state.stack}
}

export default connect(mapStateToProps,null)(Stack);