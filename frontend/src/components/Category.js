import PropTypes from 'prop-types'
import React, { Component } from 'react'

const handleClick = (evt, setActiveCategory) => {
  evt.preventDefault();
  console.log(evt.target.getAttribute('data-target'))
  setActiveCategory(evt.target.getAttribute('data-target'))
}

export default class Category extends Component {
  static defaultProps = {
    catName: 'All',
    catId: String(Date.now()),
    numOfTabs: 0,
    isActive: false
  };

  render() {
    const { catId, catName, isActive } = this.props;
    const classNames = `grow text-xl text-center py-5 text-white cursor-pointer ${isActive ? "bg-softBlue border-b md:border-b-0 " : "border-b-8 border-softBlue"}`;

    return (
      <div className={classNames} data-target={catId} onClick={(evt) => handleClick(evt, this.props.setActiveCategory)}>{catName}</div>
    );
  }
}

Category.propTypes = {
  catName: PropTypes.string,
  catId: PropTypes.string,
  numOfTabs: PropTypes.number,
  isActive: PropTypes.bool,
  setActiveCategory: PropTypes.func
};