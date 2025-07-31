export function MainContent() {
  return (
    <>
      <main>
        <div className="main_sec1">
          <div className="title">Your Projects</div>
          <div className="cards">
            <div className="card">
              <h3>Super Cool Project</h3>
              <p>
                Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin
                nibh erat, id facilisis felis accumsan nec.
              </p>
              <div className="icons">
                <i className="far fa-star" />
                <i className="far fa-eye" />
                <i className="fas fa-share-alt" />
              </div>
            </div>
            <div className="card">
              <h3>Less Cool Project</h3>
              <p>
                Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque
                sed dolor tincidunt, consectetur sapien et, facilisis dolor.
              </p>
              <div className="icons">
                <i className="far fa-star" />
                <i className="far fa-eye" />
                <i className="fas fa-share-alt" />
              </div>
            </div>
            <div className="card">
              <h3>Impossible App</h3>
              <p>
                In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a
                placerat velit sagittis id.
              </p>
              <div className="icons">
                <i className="far fa-star" />
                <i className="far fa-eye" />
                <i className="fas fa-share-alt" />
              </div>
            </div>
            <div className="card">
              <h3>Easy Peasy App</h3>
              <p>
                Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim
                urna eget accumsan aliquam.Etiam cursus eros ac efficitur
                fringilla. Vestibulum dignissim urna eget accumsan aliquam.
              </p>
              <div className="icons">
                <i className="far fa-star" />
                <i className="far fa-eye" />
                <i className="fas fa-share-alt" />
              </div>
            </div>
            <div className="card">
              <h3>Ad Blocker</h3>
              <p>
                Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus
                vel, pharetra hendrerit felis. Aliquam sed malesuada eros.
              </p>
              <div className="icons">
                <i className="far fa-star" />
                <i className="far fa-eye" />
                <i className="fas fa-share-alt" />
              </div>
            </div>
            <div className="card">
              <h3>Money Maker</h3>
              <p>
                Praesent convallis, libero quis congue elementum, nunc ante
                faucibus sapien, ac scelerisque tortor purus sit amet ex.
              </p>
              <div className="icons">
                <i className="far fa-star" />
                <i className="far fa-eye" />
                <i className="fas fa-share-alt" />
              </div>
            </div>
          </div>
        </div>
        <div className="main_sec2">
          <div className="title">Announcements</div>
          <div className="main_sec2_sub1">
            <div className="card2">
              <div className="item">
                <h5>Site Maintenance</h5>
                <p>
                  Vestibulum condimentum tellus lacus, in accumsan elit maximus
                  ac. Donec hendrerit sodales congue.
                </p>
              </div>
              <div className="item">
                <h5>Community Share Day</h5>
                <p>
                  Nam vel lectus tincidunt, rutrum nulla ea, omnis libero.
                  Aliquam dictum accumsan porttitor.
                </p>
              </div>
              <div className="item">
                <h5>Update Privacy Policy</h5>
                <p>
                  Phasellus efficitur nisi eget elit consectetur, eget
                  condimentum ante auctor. Cras fringilla sagittis sem in
                  mattis...
                </p>
              </div>
            </div>
          </div>
          <div className="title">Trending</div>
          <div className="main_sec2_sub2">
            <div className="card2">
              <div className="item2">
                <div className="icon">
                  <img src="/src/assets/img2.png"  />
                </div>
                <div className="contain">
                  <h5>@tegan</h5>
                  <p>World Peace Builder</p>
                </div>
              </div>
              <div className="item2">
                <div className="icon">
                  <img src="/src/assets/img1.png"  />
                </div>
                <div className="contain">
                  <h5>@morgan</h5>
                  <p>Super Cool Project</p>
                </div>
              </div>
              <div className="item2">
                <div className="icon">
                  <img src="/src/assets/img3.png"  />
                </div>
                <div className="contain">
                  <h5>@kendall</h5>
                  <p>Life Changing App</p>
                </div>
              </div>
              <div className="item2">
                <div className="icon">
                  <img src="/src/assets/img4.png"  />
                </div>
                <div className="contain">
                  <h5>@alex</h5>
                  <p>No Traffic Maker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
