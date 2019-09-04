import React from 'react'
// import {Link, graphql, StaticQuery} from 'gatsby'
import {Link} from 'gatsby'
// import SearchBox from '../SearchBox'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      height: 'beforeScroll',
      logo: 'beforeScroll',
      logo_height: 'beforeScroll',
      textColor: 'beforeScroll',
      backgroundColor: 'beforeScroll',
      borderBottom: 'beforeScroll',
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    const navbar_backgroundColor_beforeScroll = this.props.navbar_backgroundColor_beforeScroll
    const navbar_textColor_beforeScroll = this.props.navbar_textColor_beforeScroll
    const navbar_logo_beforeScroll = this.props.navbar_logo_beforeScroll
    const border_bottom_beforeScroll = this.props.border_bottom_beforeScroll
    const navbar_height_beforeScroll = this.props.navbar_height_beforeScroll
    const navbar_logo_height_beforeScroll = this.props.navbar_logo_height_beforeScroll

    const navbar_backgroundColor_afterScroll = this.props.navbar_backgroundColor_afterScroll
    const navbar_textColor_afterScroll = this.props.navbar_textColor_afterScroll
    const navbar_logo_afterScroll = this.props.navbar_logo_afterScroll
    const border_bottom_afterScroll = this.props.border_bottom_afterScroll
    const navbar_height_afterScroll = this.props.navbar_height_afterScroll
    const navbar_logo_height_afterScroll = this.props.navbar_logo_height_afterScroll
    return (
      <nav className='navbar is-fixed-top'
        style={
          {
            backgroundColor: `${
              this.state.backgroundColor === 'beforeScroll'
                ? navbar_backgroundColor_beforeScroll
                : navbar_backgroundColor_afterScroll
            }`,
            borderBottom: `${
              this.state.borderBottom === 'beforeScroll'
                ? border_bottom_beforeScroll
                : border_bottom_afterScroll
            }`,
          }
        } aria-label='main navigation'>

        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={
              `${
                this.state.logo === 'beforeScroll'
                  ? navbar_logo_beforeScroll
                  : navbar_logo_afterScroll
              }`
            } style={
              {
                height: `${
                  this.state.logo_height === 'beforeScroll'
                    ? navbar_logo_height_beforeScroll
                    : navbar_logo_height_afterScroll
                }`,
              }
            } alt='DataHarvest White Logo' />
          </Link>
          <button
            className={`button navbar-burger ${this.state.isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={this.toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
            <Link className='navbar-item' style={
              {
                color: `${
                  this.state.textColor === 'beforeScroll'
                    ? navbar_textColor_beforeScroll
                    : navbar_textColor_afterScroll
                }`,
                height: `${
                  this.state.height === 'beforeScroll'
                    ? navbar_height_beforeScroll
                    : navbar_height_afterScroll
                }`,
              }
            } to='/project'>
              Project
            </Link>
            <Link className='navbar-item' style={
              {
                color: `${
                  this.state.textColor === 'beforeScroll'
                    ? navbar_textColor_beforeScroll
                    : navbar_textColor_afterScroll
                }`,
                height: `${
                  this.state.height === 'beforeScroll'
                    ? navbar_height_beforeScroll
                    : navbar_height_afterScroll
                }`,
              }
            } to='/about'>
              About
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
