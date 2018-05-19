import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Custom components
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

import reducers from './reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Header title="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);

export default App;
