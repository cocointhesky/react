import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl,FormLabel,Button} from 'react-bootstrap';
import {addStack} from '../actions';
class StackForm extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            cards:[]
        }
    }

    addCard(){
        const {cards}=this.state;
        cards.push({id:cards.length, prompt:'',answer:''});
        this.setState({cards});
    }
    updateCardPart(event,index,part){
        const{cards}=this.state;
        cards[index][part]=event.target.value;
        this.setState({cards});
    }

    addStack(){
        console.log('StackForm stateddd', this.state);
        this.props.addStack(this.state);
    }

    render(){
        console.log('StackForm',this.state);
        return(
            <div>
                <Link to='/' className='link-home'><h4>Home</h4>
                </Link>
                <h4>Create a new Stack</h4>
                <br />
                <Form inline>
                    <FormGroup>
                        <FormLabel>Title:</FormLabel>
                        {' '}
                        <FormControl onChange={event=>this.setState({title:event.target.value})} />
                    </FormGroup>
                    {
                        this.state.cards.map((card,index)=>{
                            return(
                                <div key={card.id}>
                                    <br/>
                                    <FormGroup>
                                        <FormLabel>Prompt:</FormLabel>
                                        {' '}
                                        <FormControl  
                                            onChange={event=>this.updateCardPart(event,index,'prompt')}
                                        /> 
                                        {' '}
                                        <FormLabel>Answer:</FormLabel>
                                        {' '}
                                        <FormControl 
                                            onChange={event=>this.updateCardPart(event,index,'answer')}
                                        />
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                    
                </Form>
                <br />
                <Button onClick={()=>this.addCard()}>Add Card</Button>
                {' '}
                <Button onClick={()=>this.addStack()}>Save and Add the Stack</Button>
            </div>
        )
    }
}


export default connect(null,{addStack})(StackForm);