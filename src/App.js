import React from 'react';
import AddUser from "./components/addUser";
import Header from './components/Header';
import { Container } from 'reactstrap';
import Groups from './components/Groups';
import Expenses from './components/Expense';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
      
        <Container>
          <Header />
          <Routes>
          <Route path="/" Component={AddUser} exact >
            </Route>
            <Route path="/group" exact Component={Groups} >
            </Route>
            <Route path="/expense" Component={Expenses} exact >
            </Route>
            </Routes>
            
        </Container>
        
      </Router>

    </div>
  );
}

export default App;
