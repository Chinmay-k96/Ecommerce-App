import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';


import Logo from '../../assets/logo.png';
import './header.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt="Logo"  className="Logo"/>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop/mens'>
        MEN
      </Link>
      <Link className='option' to='/shop/womens'>
        WOMEN
      </Link>
      <Link className='option' to=''>
        BRANDS
      </Link>
      <Link className='option' to=''>
        OFFERS
      </Link>
      {currentUser ? (
        <div className='option' onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);