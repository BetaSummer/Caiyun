import React from 'react';
import {connect} from 'react-redux';

// import some Components
import Header from '../components/header';
import Footer from '../components/footer';
// import some action


class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // dispatch some action to get data or somethings
  }

  render() {
    // get some props from mapStateToProps
    const navs = ['about', 'team', 'blog'];
    const curTab = 'team';
    return (
      <div>
        <Header navs={navs} curTab={curTab}/>
        {/* some component like Header */}
        {this.props.children}
        {/* some component like Footer */}
        <Footer navs={navs}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(App);
