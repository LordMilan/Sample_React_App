import './App.css';
import Nav from './Components/Nav/Nav';
import Counter from './Components/Counter/Counter';
import { useState } from 'react';

function App() {

  let total = 0;
  const [arr, setArr] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }]);


  const handleDelete = (deleteId) => {
    const deleteArr = arr.filter(({ id }) => id !== deleteId);
    setArr(deleteArr);
  }

  const incrementHandle = (count) => {

    const newArr = [...arr];
    const index = newArr.indexOf(count);
    newArr[index] = { ...count };
    newArr[index].value++;
    setArr(newArr);

  }

  arr.map(({ value }) => total += value);





  return (


    <div className="App_content">
      <Nav total={total}></Nav>
      <Counter arr={arr} handleDelete={handleDelete} incrementHandle={incrementHandle}></Counter>
    </div>


  );
}

export default App;
