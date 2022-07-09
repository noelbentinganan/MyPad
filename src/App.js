import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Create from "./Create";
import NoteDetails from "./NoteDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
    <body className="h-screen bg-primaryColor">
      <div className="relative container mx-auto text-white max-w-screen-sm pt-4">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/notes/:id">
              <NoteDetails />
            </Route>
            <Route path="*">
            <NotFound />  
          </Route>
          </Switch>
      </div>
    </body>
    </Router>
  );
}

export default App;
