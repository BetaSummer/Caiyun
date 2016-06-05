import React from 'react';
import {connect} from 'react-redux';
// import some Components
import Header from '../components/header';
import Footer from '../components/footer';
//import some action


class App extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // dispatch some action to get data or somethings
  }

  render() {
    // get some props from mapStateToProps

    return(
      <div>
        <Header/>
        {/*some component like Header*/}
        {this.props.children}
        {/*some component like Footer*/}
        <Footer/>
      </div>
    )
  }

};


function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(App);
