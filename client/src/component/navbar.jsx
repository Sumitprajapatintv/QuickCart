import react from 'react'
import './../style/Navbar.css';
function Navbar() {
  return <nav className='navbar'>
    <div className='navbar-left'>
      <a href="/" className="logo">
        FlipKart
      </a>
    </div>
    <div className='navbar-center'>
      <input type="search" name="search-form" id="search-form" className="search-input" 
      onChange={(e) => setQuery(e.target.value)} placeholder="Search user" />
      <button>Login</button>
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart"></img>
      <a title="Cart">Cart</a>
    </div>
    <div className='navbar-right'><a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
      </a>
      <a href="/account" className="user-icon">
        <i className="fas fa-user"></i>
      </a></div>
  </nav>
}

export default Navbar;