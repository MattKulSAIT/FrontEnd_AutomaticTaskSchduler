import './App.css';
import DenseTable from'./componenets/Table'
import PositionedMenu from'./componenets/topBar'
import ProminentAppBar from'./componenets/SearchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PositionedMenu style={{ marginTop: '0' }} />
        
      </header>
      <div>
        <ProminentAppBar/>
      </div>
      <main>
      <DenseTable />
      </main>
    </div>
  );
}

export default App;
