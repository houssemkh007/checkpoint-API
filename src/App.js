
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Component/UserList';
import {BrowserRouter, Route} from 'react-router-dom'
import UserProfile from './Component/UserProfile';
function App() {
  return (
    <div className="container-fluid">
  
     <BrowserRouter>
     <Route exact path="/" component={UserList}/>
       <Route exact path="/profile/:id" render={(props)=><UserProfile {...props}/>}/>
  
     </BrowserRouter>
    </div>
  );
}

export default App;
