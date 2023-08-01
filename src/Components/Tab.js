import React from 'react';
// import Form from './Form';
// import Component1 from './Component1';
import Form from './Form';
import Sidebar from './Sidebar';

function Tab() {
  return (
    <div className='flex'>
        <Sidebar/>
    <Form/>
    </div>
  );
}

export default Tab;
