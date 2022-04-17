import { BrowserRouter, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import { Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from './components/layout/Layout'
function App() {
  return (
    <div>
      <BrowserRouter>
       <Layout>
          <Switch>
            <Route path="/" exact={true}>
              <AllMeetupsPage />
            </Route>
            <Route path="/newMeetup">
              <NewMeetupPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
          </Switch>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
