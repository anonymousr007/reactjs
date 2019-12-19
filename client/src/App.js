import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/home'
      import TodoList from './pages/test/TodoList'
      import store from './store';

      class App extends Component {
          render() {
              return (
                  <Provider store={store}>
                      <BrowserRouter>
                          <div>
                              <Route path='/' exact component={Home}></Route>
                              <Route path='/test' exact component={TodoList}></Route>
                          </div>
                      </BrowserRouter>
                  </Provider>
              );
  }
}

export default App;
