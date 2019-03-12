import { store } from '../';
import * as service from '../../dataService';

export const DATA_LOAD_START = 'DATA_LOAD_START';
export const DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
export const DATA_LOAD_ERROR = 'DATA_LOAD_ERROR';
export const DATA_SAVE_START = 'DATA_SAVE_START';
export const DATA_SAVE_SUCCESS = 'DATA_SAVE_SUCCESS';
export const DATA_SAVE_ERROR = 'DATA_SAVE_ERROR';

export const loadTemplate = (templateSlug) => (dispatch) => {
  dispatch({ type: DATA_LOAD_START });
  service.loadTemplate(templateSlug)
    .then(data => dispatch({type: DATA_LOAD_SUCCESS, payload: data }))
    .catch(err => dispatch({type: DATA_LOAD_ERROR, payload: { err }}));
};

export const saveTemplate = () => (dispatch) => {
  dispatch({ type: DATA_SAVE_START });
  const {isLoading, isChanged, error, ...data} = store.getState().template;
  service.saveTemplate(data)
    .then(data => dispatch({type: DATA_SAVE_SUCCESS, payload: data }))
    .catch(err => dispatch({type: DATA_SAVE_ERROR, payload: { err }}));
};