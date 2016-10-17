import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class TabPane extends React.Component {
  render() {
    const { route, title } = this.props;
    const linkClass = classNames({
      active: this.context.router.isActive(route)
    });
    return (
      <li className={linkClass}>
        <Link className="script-button" to={`/${route}`} aria-expanded="true">
          <span className="tab-title">{title}</span>
        </Link>
      </li>
    );
  }
}

TabPane.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

TabPane.contextTypes = {
  router: PropTypes.object.isRequired
};

export default TabPane;
