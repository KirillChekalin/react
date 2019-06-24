import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger'
import idCreator from '../middlewares/idCreator'
import randomid from '../middlewares/randomid'
import api from '../middlewares/api'
import thunk from 'redux-thunk'


const enhancer = applyMiddleware(thunk, idCreator,randomid, api, logger);

const store = createStore(reducer, {}, enhancer);
//dev only
window.store = store;


export default store;
