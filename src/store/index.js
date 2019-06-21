import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger'
import idCreator from '../middlewares/idCreator'
import randomid from '../middlewares/randomid'
import api from '../middlewares/api'

const enhancer = applyMiddleware(idCreator,randomid, api, logger);

const store = createStore(reducer, {}, enhancer);
//dev only
window.store = store;


export default store;
