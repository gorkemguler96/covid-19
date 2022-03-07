import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useSelector, useDispatch } from 'react-redux'
import { Doughnut } from 'react-chartjs-2';
import { decrement } from './redux/dataSlice'
import style from './style.css'
import Header from "./components/Header";
import Table from "./components/Table";
import SelectedInput from "./components/SelectedInput";
import Graphics from "./components/Graphics";

function App(){

const count = useSelector((state) => state.data.value)
const dispatch = useDispatch()

  return (
        <div className={"container"}>
            <Header />
            <Table/>
            <SelectedInput/>
            <Graphics/>
        </div>
  );
}

export default App;
