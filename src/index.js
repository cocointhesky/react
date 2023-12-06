import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';
import rootReducer from './reducers';
import {setStack} from './actions';
import StackForm from './components/StackForm';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
const store=createStore(rootReducer);
store.subscribe(()=>console.log('store', store.getState()));
store.dispatch(setStack({id:0,title:'example',cards:[]}));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/stack' component={Stack} />
                <Route path='/stack_form' component={StackForm} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);



