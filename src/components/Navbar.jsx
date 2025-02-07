const Navigation = ()=>{
    return (
        <nav>
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
        <button>login</button>
      </nav>
    );
}

export default Navigation;