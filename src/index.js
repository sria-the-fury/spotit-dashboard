import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./store/rootReducer";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import thunk from "redux-thunk";
import firebase from "./firebase/firebaseConfig";
import 'react-toastify/dist/ReactToastify.css';
import {createFirestoreInstance} from "redux-firestore";
import {Provider} from "react-redux";
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));
const firebaseProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...firebaseProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
    ,
    document.getElementById('root')
);


serviceWorkerRegistration.unregister();

