
import ChatRoom from './components/ChatRoom/ChatRoom';
import AuthProvider from './context/AuthProvider'
import Login from './components/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" component={ChatRoom} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
