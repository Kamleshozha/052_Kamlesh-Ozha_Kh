import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <MyComponents />
    </>
  );
}

export default App;


const MyComponents = () => {
  let applicationName = "MyChatApp ";
  let StudentName = "Kamlesh Ozha ";
  let StudentId = "210940320052";
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const getMsg = (e) => {
    setMsg(e.target.value);

  };
  const submit1 = () => {
    const newList1 = [...list, msg];
    setList(newList1);
    setMsg("");
  };
  return (
    <div>
      <div className="header">
        <span >{applicationName}</span>
        <span className="text1">{StudentName}</span>
        <span className="text1">{StudentId}</span>
      </div>
      <div className="msg">
        <input type="text" className="text1" placeholder="Lets Chat" value={msg} onChange={getMsg} />
        <input type="button" className="button1" value="send" onClick={submit1} />
      </div>
      {list.map = (item) => {
        <div>{item}</div>
      }};
    </div>
  );
}