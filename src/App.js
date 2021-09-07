
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todo";
import EditForm from "./components/EditForm";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <br />
        <CreateTodo />
        <br />
        <Todos />
        {/* <EditForm/> */}
        <Route exact path ='/EditForm' component={EditForm}></Route>
      </Router>

    </div>
  );
}

export default App;
