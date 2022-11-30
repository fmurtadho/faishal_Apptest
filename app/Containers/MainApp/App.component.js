import {StatusBar} from "react-native";
import React from 'react';
import { Provider } from 'react-redux';

import store from '../../Redux/CreateStore/CreateStore';
import { RootNavigator } from '../../Navigation/RootNavigator/RootNavigator';
import { Colors } from "../../Theme";

export default function AppComponent() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={Colors.DARKER_BLUE}
      />
      <RootNavigator />
    </Provider>
  );
}
