import { createStore, applyMiddleware } from 'redux';
import rootReduer from '../reducers';
import thunk from 'redux-thunk';

//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState) {
    return createStore(
        rootReduer,
        initialState,
        applyMiddleware(thunk)
    );
}

// TODO what is reduxImmutableStateInvariant, also add the redux dev tools see how you did it in spaceX app