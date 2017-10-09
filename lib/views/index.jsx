import { h } from 'preact';

module.exports = ({ name }) => (
  <div class="fox">
    <h5>{ name }</h5>
    <p>This page is all about {name}.</p>
  </div>
);
