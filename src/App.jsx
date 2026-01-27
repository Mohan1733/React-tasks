import React from 'react';
import Login from './component/Login';


const App = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const menus= ['profile','settings','logout'];
  const tabs=[
    {label:'tab 1',content:<div>content of tab 1</div>},
    {label:'tab 2',content:<div>content of tab 2</div>},
    {label:'tab 3',content:<div>content of tab 3</div>},
  ]
  const user={name: "john doe",age: "23"};
  return (
    <>
    <Login />
    </>
  );
};

export default App;
