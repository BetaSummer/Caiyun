import React from 'react';
import {connect} from 'react-redux';
// import some Components
import Header from '../components/header';
import Footer from '../components/footer';
// import some action
import {selectTab} from '../actions/';
class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
    tab: React.PropTypes.object,
    location: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    pathname: React.PropTypes.string,
  }
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    const {tab, location, dispatch} = nextProps;
    const pathname = location.pathname;
    if (tab.curTab !== pathname) {
      dispatch(selectTab(pathname));
    }
  }

  render() {
    const {tab} = this.props;
    const curTab = tab.curTab;
    const headerTabs = tab.headerTabs;
    const footerTabs = tab.footerTabs;
    return (
      <div>
        <Header tabs={headerTabs} curTab={curTab}/>
        {this.props.children}
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
