export function Aside({ active, toggle }) {
  return (
    <>
      <aside className={active ? "active" : ""}>
        <section className="head">
          <div className="title" style={{ fontSize: "1.5rem" }}>
            <i className="fas fa-chart-line" style={{ fontSize: "1.5rem" }} />
            <span>Dashboard</span>
          </div>
        </section>
        <section className="main">
          <ul>
            <li>
              <a href="#">
                <i className="fa-solid fa-house" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-address-card" />
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-message" />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-clock" />
                <span>History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-list-check" />
                <span>Tasks</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-users" />
                <span>Communities</span>
              </a>
            </li>
          </ul>
        </section>
        <section className="footer">
          <ul>
            <li>
              <a href="#">
                <i className="fa-solid fa-gear" />
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle" />
                <span>Support</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-shield-halved" />
                <span>Privacy</span>
              </a>
            </li>
          </ul>
        </section>
        <div
          id="close_arrow"
          className={active ? "close_arrow active" : "close_arrow"}
          onClick={toggle}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </aside>
    </>
  );
}
