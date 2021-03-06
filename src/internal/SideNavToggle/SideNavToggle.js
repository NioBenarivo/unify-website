import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SideNavToggle extends Component {
  static propTypes = {
    onToggleBtnClick: PropTypes.func,
    isOpen: PropTypes.bool,
  }

  render() {
    const {
      onToggleBtnClick,
      isOpen,
    } = this.props;

    const classNames = classnames(
      'side-nav__toggle-btn',
      (isOpen ? 'open' : 'close')
    );

    return (
      <button
        aria-label="Toggle Navigation"
        onClick={onToggleBtnClick}
        className={classNames}
      >
        <div className="line">
          <span></span>
        </div>
        <div>
          <span className="text">Menu</span>
        </div>
      </button>
    );
  }
}

export default SideNavToggle;
