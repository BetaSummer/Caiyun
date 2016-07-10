import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import styles from './index.scss';
import classNames from 'classNames/bind';
import Image from '../../components/image';
import {getWindowScrollTop} from '../../javascripts/helper';
import {setScrollTop} from '../../actions/';
const cx = classNames.bind(styles);

class Team extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    user: PropTypes.object,
    team: PropTypes.array,
    dispatch: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(setScrollTop(getWindowScrollTop()));
  }
  render() {
    let classNameForTeam = cx({
      team: true,
    });
    let classNameForItem = cx({
      item: true,
    });
    const {team} = this.props.user;
    const {length} = team;
    const teamList = team.map((item, index) => {
      return (
        <div key={index} className={classNameForItem}>
          <Link to={`/user/${length - item.id - 1}`}>
            <Image imgSrc={item.imgsrc}/>
            <div className={styles.intro}>
              <h2>{item.name}</h2>
              <p>{item.professional}</p>
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
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

module.exports = connect(mapStateToProps)(Team);
