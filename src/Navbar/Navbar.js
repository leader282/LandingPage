const Navbar = () => {
  return (
    <>
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon" />
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Studio</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
