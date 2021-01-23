import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curdate = new Date();
curdate = curdate.getHours();
let Greeting = "";
const cssStyle = {};

if (curdate >= 1 && curdate < 12) {
  Greeting = 'Good Morning';
  cssStyle.color = 'green'
} else if (curdate >= 12 && curdate < 19) {
  Greeting = " Good Afternoon";
  cssStyle.color = 'orange'
} else {
  Greeting = " Goodnight";
  cssStyle.color = 'black';

}

ReactDOM.render(
  <>
    <div>
      <h1> Hello Lalit Deol , &nbsp;  < span style={cssStyle} >{Greeting} </span> </h1>
    </div>
  </>,
  document.getElementById('root')
);

