import { combineReducers } from 'redux';
import theme from '../Reducers/theme';
import load from '../Reducers/load';
import lang from '../Reducers/lang';

//all reducers combined

export  default combineReducers ({
    theme: theme,
    load:load,
    lang:lang,
})

