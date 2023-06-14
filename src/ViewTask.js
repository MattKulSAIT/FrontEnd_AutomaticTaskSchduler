import './App.css';
import DenseTable from'./componenets/ViewTaskTable'
import TitleDesc from'./componenets/titleDesc'
import PositionedMenu from'./componenets/topBar'
import ProminentAppBar from'./componenets/SearchBar'
import { Link } from "react-router-dom";

// THIS NEEDS TO BE CHANGED TO APPPPPPPP:PPPPP
function viewTask() {
  return (
    <div className="viewTask">
      <PositionedMenu />
      <TitleDesc />
      <DenseTable />
    </div>
  );
}

export default viewTask;