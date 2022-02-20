import GlobalStyle from "./components/GlobalStyles";
import {Route, Switch} from 'react-router-dom';
import { Home } from "./pages/Home";
import useEagerConnect from "./hooks/useEagerConnect";

function App() {
  useEagerConnect()
  return (
    <div className="apps">
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
