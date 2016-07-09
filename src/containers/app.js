import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
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
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }
  state = {
    isShowMobileMenu: false,
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
    const {isShowMobileMenu} = this.state;
    const curTab = tab.curTab;
    const headerTabs = tab.headerTabs;
    const footerTabs = tab.footerTabs;
    return (
      <div>
        <Header tabs={headerTabs} curTab={curTab} isShowMobileMenu={isShowMobileMenu} toggleMobileMenu={this.toggleMobileMenu}/>
        {this.props.children}
        <Footer tabs={footerTabs}/>
      </div>
    );
  }
  toggleMobileMenu() {
    this.setState({
      isShowMobileMenu: !this.state.isShowMobileMenu,
    });
  }
}

function mapStateToProps(storeState) {
  return storeState;
}

export default connect(mapStateToProps)(App);
