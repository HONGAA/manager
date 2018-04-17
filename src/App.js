import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
   apiKey: 'AIzaSyCaiKDlVoYtGP1iYrzww3mCZfU5Lj4azdA',
   authDomain: 'manager-410b5.firebaseapp.com',
   databaseURL: 'https://manager-410b5.firebaseio.com',
   projectId: 'manager-410b5',
   storageBucket: '',
   messagingSenderId: '417986726591'
 };

 firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
          Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
