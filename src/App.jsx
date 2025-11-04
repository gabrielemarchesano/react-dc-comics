import dcLogo from "./assets/img/dc-logo.png"
import dcDigital from "./assets/img/buy-comics-digital-comics.png"
import dcMerchandise from "./assets/img/buy-comics-merchandise.png"
import dcSubscription from "./assets/img/buy-comics-subscriptions.png"
import dcLocation from "./assets/img/buy-comics-shop-locator.png"
import dcVisa from "./assets/img/buy-dc-power-visa.svg"

function App() {

  return (
    <div>
      <header className="d-flex justify-content-between py-3 container">
        <div className="logo">
          <img src={dcLogo} alt="" />
        </div>
        <div className="navbar gap-3 p-0">
          <a href="">CHARACTERS</a>
          <a href="">COMICS</a>
          <a href="">MOVIES</a>
          <a href="">TV</a>
          <a href="">GAMES</a>
          <a href="">COLECTIBLES</a>
          <a href="">VIDEOS</a>
          <a href="">FANS</a>
          <a href="">NEWS</a>
          <a href="">SHOP</a>
        </div>
      </header>
      <main>
        <section className="content text-white">
          <div className="upper-content bg-dark py-5">
            <div className="container">
              <span> --{">"} Content goes here {"<"}-- </span>
            </div>
          </div>
          <div className="bottom-content bg-primary py-5">
            <div className="container">
              <div className="row justify-content-around">
                <div className="col">
                  <img className="shopping-images" src={dcDigital} alt="" />
                  <span>DIGITAL COMICS</span>
                </div>
                <div className="col">
                  <img className="shopping-images" src={dcMerchandise} alt="" />
                  <span>DC MERCHANDISE</span>
                </div>
                <div className="col">
                  <img className="shopping-images" src={dcSubscription} alt="" />
                  <span>SUBSCRIPTION</span>
                </div>
                <div className="col">
                  <img className="shopping-images" src={dcLocation} alt="" />
                  <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className="col">
                  <img className="shopping-images" src={dcVisa} alt="" />
                  <span>DC POWER VISA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-white">
          <div className="upper-footer py-5">
            <div className="container">
              <ul className="list-unstyled">
                <a href="" className="list-group-item">DC COMICS</a>
                <a href="" className="list-group-item">Characters</a>
                <a href="" className="list-group-item">Comics</a>
                <a href="" className="list-group-item">Movies</a>
                <a href="" className="list-group-item">TV</a>
                <a href="" className="list-group-item">Games</a>
                <a href="" className="list-group-item">Videos</a>
                <a href="" className="list-group-item">News</a>
              </ul>
              <ul className="list-unstyled">
                <a href="" className="list-group-item">DC COMICS</a>
                <a href="" className="list-group-item">Characters</a>
                <a href="" className="list-group-item">Comics</a>
                <a href="" className="list-group-item">Movies</a>
                <a href="" className="list-group-item">TV</a>
                <a href="" className="list-group-item">Games</a>
                <a href="" className="list-group-item">Videos</a>
                <a href="" className="list-group-item">News</a>
              </ul>
              <ul className="list-unstyled">
                <a href="" className="list-group-item">DC COMICS</a>
                <a href="" className="list-group-item">Characters</a>
                <a href="" className="list-group-item">Comics</a>
                <a href="" className="list-group-item">Movies</a>
                <a href="" className="list-group-item">TV</a>
                <a href="" className="list-group-item">Games</a>
                <a href="" className="list-group-item">Videos</a>
                <a href="" className="list-group-item">News</a>
              </ul>
              <ul className="list-unstyled">
                <a href="" className="list-group-item">DC COMICS</a>
                <a href="" className="list-group-item">Characters</a>
                <a href="" className="list-group-item">Comics</a>
                <a href="" className="list-group-item">Movies</a>
                <a href="" className="list-group-item">TV</a>
                <a href="" className="list-group-item">Games</a>
                <a href="" className="list-group-item">Videos</a>
                <a href="" className="list-group-item">News</a>
              </ul>
            </div>
          </div>
          <div className="bottom-footer py-5 bg-dark">
            <button type="button" className="sign-up-button">SIGN-UP NOW!</button>
            <div>
              <span>FOLLOW US</span>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default App
