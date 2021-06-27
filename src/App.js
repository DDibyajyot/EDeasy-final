import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { BooksContextProvider } from './BooksContext';
import Book from './components/Book'
import ChoiceAlt from './components/ChoiceAlt'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/choice">
        <ChoiceAlt />
      </Route>
      {/* <Route path="/books">
        <BooksContextProvider>
        <Book />
        </BooksContextProvider>
      </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
