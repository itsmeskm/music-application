
import Login from './Components/Screen/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Screen/Dashboard';
import AddPlaylist from './Components/Screen/AddPlaylist';
import AddSongs from './Components/Screen/AddSongs.js';
import Songs from './Components/Screen/Songs';

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login key="login"/>} />
          <Route exact path="/dashboard" element={<Dashboard key="dashboard"/>} />
          <Route exact path="/addPlaylist" element={<AddPlaylist key="addPlaylist"/>} />
          <Route exact path="/addSongs" element={<AddSongs key="addSongs"/>} />
          <Route exact path="/Songs" element={<Songs key="Songs"/>} />
        </Routes>
    </Router>
  );
}

export default App;
