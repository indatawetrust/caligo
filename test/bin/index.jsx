import {h} from 'preact';

module.exports = (<div>
  hello worldddd
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
    <li><a data-toggle="tab" href="#menu4">Menu 4</a></li>
    <li><a data-toggle="tab" href="#menu5">Menu 5</a></li>
  </ul>
  <div className="tab-content">
    <div id="home" className="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Some content.</p>
    </div>
    <div id="menu1" className="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Some content in menu 1.</p>
    </div>
    <div id="menu2" className="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Some content in menu 2.</p>
    </div>
    <div id="menu3" className="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Some content in menu 3.</p>
    </div>
    <div id="menu4" className="tab-pane fade">
      <h3>Menu 4</h3>
      <p>Some content in menu 4.</p>
    </div>
    <div id="menu5" className="tab-pane fade">
      <h3>Menu 5</h3>
      <p>Some content in menu 5.</p>
    </div>
  </div>
</div>)
