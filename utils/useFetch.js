import {useEffect, useReducer} from 'react';

export const useFetch = (url, reqObj) => {
  const initialState = {
    status: 'idle',
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FETCHING':
        return {...initialState, status: 'fetching'};
      case 'FETCHED':
        return {...initialState, status: 'fetched', data: action.payload};
      case 'FETCH_ERROR':
        return {...initialState, status: 'error', error: action.payload};
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      dispatch({type: 'FETCHING'});

      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type: 'FETCHED', payload: data});
      } catch (error) {
        dispatch({type: 'FETCH_ERROR', payload: error.message});
      }
    };

    fetchData();
  }, [url, reqObj]);

  return state;
};
