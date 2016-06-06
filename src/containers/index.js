import React from 'react';

import Button from '../components/button';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button/>
        <p>index</p>
      </div>
    );
  }
}

export default Index;
