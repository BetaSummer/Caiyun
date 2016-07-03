import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import styles from './index.scss';
import classNames from 'classNames/bind';

import Image from '../../components/image';
const cx = classNames.bind(styles);

class Team extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    user: PropTypes.object,
    team: PropTypes.array,
    params: PropTypes.object,
    id: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    const userId = this.props.params.id;
    if (userId) {
      // dispatch select currentTab teamDetail to hide header and footer
      // dispatch select user data By Id
    }
  }

  render() {
    let classNameForTeam = cx({
      team: true,
    });
    let classNameForItem = cx({
      item: true,
    });
    const {team} = this.props.user;
    console.log(this.props);
    console.log(typeof this.props.params.id);

    const teamList = team.map((item, index) => {
      return (
        <div key={index} className={classNameForItem}>
          <Link to={`/team/${item.id}`}>
            <Image imgSrc={item.avator}/>
            <div className={styles.intro}>
              <h2>{item.name}</h2>
              <p>{item.describe}</p>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className={classNameForTeam}>
        <h1>TEAM</h1>
        <p>We reveal our inner heroes every day when creating interesting things</p>
        {teamList}
        {this.props.children}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {user} = state;
  return {user};
}
export default connect(mapStateToProps)(Team);
