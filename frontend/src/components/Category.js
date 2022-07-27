import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Category extends Component {
  static defaultProps = {
    catName: 'All',
    id: -1,
    numOfTabs: 0,
    isActive: false
  };

  render() {
    const { id, catName, isActive } = this.props;
    const classNames = `grow text-xl text-center py-5 text-white cursor-pointer ${isActive ? "bg-softBlue border-b md:border-b-0 " : "border-b-8 border-softBlue"}`;

    return (
      <div className={classNames} data-target={id}>{catName}</div>
    );
  }
}

Category.propTypes = {
  catName: PropTypes.string,
  id: PropTypes.number,
  numOfTabs: PropTypes.number,
  isActive: PropTypes.bool
};