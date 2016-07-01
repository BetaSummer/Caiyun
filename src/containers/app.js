import React from 'react';
import {connect} from 'react-redux';

// import some Components
import Header from '../components/header';
import Footer from '../components/footer';
// import some action


class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
    tab: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // handle dom
  }

  render() {
    // get some props from mapStateToProps
    const {tab} = this.props;
    const curTab = tab.curTab;
    const headerTabs = tab.headerTabs;
    const footerTabs = tab.footerTabs;
    return (
      <div>
        <Header tabs={headerTabs} curTab={curTab}/>
        {/* some component like Header */}
        {this.props.children}
        {/* some component like Footer */}
        <Footer tabs={footerTabs}/>
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
