import img1 from '../assets/img1.png'
function Header({ toggle }) {
  return (
    <>
      <header>
        <section className="header_sec1">
          <div className="search">
            <button className="menu-toggle" onClick={toggle}>
              <i className="fas fa-bars" />
            </button>
            <label htmlFor="search">
              <i className="fas fa-search" />
            </label>
            <input type="search" id="search" />
          </div>
          <div className="head_1">
            <div className="icon">
              <i className="fas fa-bell" />
            </div>
            <div className="img">
              <img src={img1}  />
            </div>
            <div className="name">Morgan Oakley</div>
          </div>
        </section>
        <section className="header_sec1">
          <div className="head_2">
            <div className="img">
              <img src={img1}  />
            </div>
            <div className="title">
              <h5>Hi there,</h5>
              <div className="name">Morgan Oakley (@morgan)</div>
            </div>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Upload</a>
              </li>
              <li>
                <a href="#">Share</a>
              </li>
            </ul>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
