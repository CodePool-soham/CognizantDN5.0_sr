import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {

  let flag = false;
 // let flag = true;

  return (
    <div className="App">

      {
        flag ? <ListofPlayers /> : <IndianPlayers />
      }

    </div>
  );
}

export default App;