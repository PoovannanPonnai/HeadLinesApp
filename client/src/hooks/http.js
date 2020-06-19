import { useReducer, useCallback } from 'react';

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true,
        error: null,
        data: null
      };
    case 'RESPONSE':
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData
      };

    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...curHttpState, error: null };
    default:
      throw new Error('Error !');
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null
  });

  const sendRequest = useCallback(async (url, method) => {
    dispatchHttp({ type: 'SEND' });
    try {
      let response;
      response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      response = await response.json();

      dispatchHttp({
        type: 'RESPONSE',
        responseData: response
      });
    } catch (e) {
      dispatchHttp({
        type: 'ERROR',
        errorMessage: 'Something went wrong!'
      });
    }
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest
  };
};

export default useHttp;
