// import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

function App() {
  const renderImage = () => {
    const imgArr = [];
    for (let i = 1; i <= 12; i += 1) {
      imgArr.push(
        <img
          className="images"
          key={i}
          src={`./img/${i}.webp`}
          alt="pictures"
        />
      );
    }
    return imgArr;
  };
  const images = renderImage();

  return (
    <>
      {/* <!-- Header --> */}

      <header>
        <div className="container">
          <nav className="navigation">
            {/* <!-- Logo is hidden till view port size 1200px  --> */}

            {/* <h1 className="logo">logo</h1> */}

            {/* <!-- Navigation --> */}
          </nav>
        </div>
      </header>

      {/* <!-- main content --> */}

      <main>
        <section className="section">
          <div className="container">
            {/* <div class="backdrop is-hidden" data-modal>
              <div class="modal full-picture">
                <button class="button-close" data-modal-close>
                  <svg class="cross-icon" width="11" height="11">
                    <use href="./img/svg/sprite.svg#icon-cross"></use>
                  </svg>
                </button>
              </div>
            </div> */}
            <div>
              <span>
                Количество картинок:
                {images.length}.{" "}
              </span>
              <span>Сегодня </span> {moment().format("DD/MM/YYYY HH:mm")}
            </div>
            <div className="image-list">{images}</div>
          </div>
        </section>
      </main>

      {/* <!-- Footer (just because it should be even if it's epmty) --> */}
      <footer>
        <address></address>
      </footer>
    </>
  );
}

export default App;
