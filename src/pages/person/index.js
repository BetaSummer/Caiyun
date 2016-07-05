import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classNames/bind';
import {Link} from 'react-router';
import styles from './index.scss';
import {selectTab, selectUser} from '../../actions/';
const cx = classNames.bind(styles);

import User from '../../components/user';
class Person extends React.Component {
  static propTypes = {
    params: PropTypes.object,
    id: PropTypes.string,
    dispatch: PropTypes.func,
    currentUser: PropTypes.object,
  }
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const userId = this.props.params.id;
    const {dispatch} = this.props;
    if (userId) {
      dispatch(selectUser(userId));
    }
  }
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(selectTab('team'));
  }
  render() {
    let classNameForPerson = cx({
      person: true,
    });
    const {currentUser} = this.props;
    return (
      <div className={classNameForPerson}>
        <div className={styles.closeBtn}>
          <Link to="/team">&times;</Link>
        </div>
        {currentUser.name && <User user = {currentUser}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {currentUser} = state.user;
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(Person);
