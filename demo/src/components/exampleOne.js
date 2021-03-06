import React, { Component } from 'react';
import FontSizeChanger from '../../../dist/bundle';
import Highlight from 'react-highlight';

class ExampleOne extends Component {
  render() {
    return (
      <div className="example">
        <div className="title">1. General usage</ div>
        <div className="code">
        <Highlight className='javascript'>
          {`
<FontSizeChanger
  targets={['#target-one .content']}
  options={{
    stepSize: 2,
    range: 3
  }}
/>
<div id="target-one">
  <p className="title">This is the title of my target text</p>
  <p className="content">This is the content of my target text</p>
</div>
          `}
        </Highlight>
        </ div>
        <div className="demo">
          <FontSizeChanger
            targets={['#target-one .content']}
            options={{
              stepSize: 2,
              range: 3
            }}
          />
          <div id="target-one">
            <p className="title">This is the title of my target text</p>
            <p className="content">This is the content of my target text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExampleOne;
