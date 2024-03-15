"use client";

import { store } from './store';
import { Provider } from 'react-redux';

export function ReduxProvider(props) {
    return <Provider store={store}>{props.children}</Provider>
}
