/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-11-23 22:23:00
 * @LastEditTime: 2021-11-24 00:19:55
 */
import React from 'react';
import ReactDom from 'react-dom';
import ModuleA from './Component/module';

const App = () => {
  return (
    <div>
      这是一个app
      <br />
      <ModuleA />
    </div>
  );
};

ReactDom.render(<App />, document.body);
