import React from 'react';

import Button from '../components/button';
import ImageContainer from '../containers/image';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button/>
        <ImageContainer/>
        <p>index</p>
      </div>
    );
  }
}

export default Index;
