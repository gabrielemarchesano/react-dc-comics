import dcLogo from "../src/assets/img/dc-logo.png"
import biggerLogo from "../src/assets/img/dc-logo-bg.png"
import facebookLogo from "../src/assets/img/footer-facebook.png"
import twitterLogo from "../src/assets/img/footer-twitter.png"
import youtubeLogo from "../src/assets/img/footer-youtube.png"
import pinterestLogo from "../src/assets/img/footer-pinterest.png"
import periscopeLogo from "../src/assets/img/footer-periscope.png"

import Navbar from "./components/Navbar"
import DCMerchandise from "./components/DCMerchandise"


function App() {

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center py-3 container">
        <div className="logo">
          <img src={dcLogo} alt="" />
        </div>
        <Navbar />
      </header>
      <main>
        <section className="content text-white">
          <div className="upper-content bg-dark py-5">
            <div className="container">
              <span> --{">"} Content goes here {"<"}-- </span>
            </div>
          </div>
          <div className="bottom-content bg-primary py-5">
            <DCMerchandise/>
          </div>
        </section>
      </main>
      <footer className="text-white">
          <div className="upper-footer py-5">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="row g-1">
                    <div className="col-4">
                      <ul className="list-unstyled">
                        <a href="" className="list-group-item list-title">DC COMICS</a>
                        <a href="" className="list-group-item">Characters</a>
                        <a href="" className="list-group-item">Comics</a>
                        <a href="" className="list-group-item">Movies</a>
                        <a href="" className="list-group-item">TV</a>
                        <a href="" className="list-group-item">Games</a>
                        <a href="" className="list-group-item">Videos</a>
                        <a href="" className="list-group-item">News</a>
                      </ul>
                      <ul className="list-unstyled">
                        <a href="" className="list-group-item list-title">DC COMICS</a>
                        <a href="" className="list-group-item">Characters</a>
                        <a href="" className="list-group-item">Comics</a>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="list-unstyled">
                        <a href="" className="list-group-item list-title">DC COMICS</a>
                        <a href="" className="list-group-item">Characters</a>
                        <a href="" className="list-group-item">Comics</a>
                        <a href="" className="list-group-item">Movies</a>
                        <a href="" className="list-group-item">TV</a>
                        <a href="" className="list-group-item">Games</a>
                        <a href="" className="list-group-item">Videos</a>
                        <a href="" className="list-group-item">News</a>
                        <a href="" className="list-group-item">Videos</a>
                        <a href="" className="list-group-item">News</a>
                        <a href="" className="list-group-item">Videos</a>
                        <a href="" className="list-group-item">News</a>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="list-unstyled">
                        <a href="" className="list-group-item list-title">DC COMICS</a>
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
                </div>
                <div className="col-6">
                  <img id="bigger-logo" src={biggerLogo} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer py-5 bg-dark">
            <div className="container d-flex justify-content-between">
              <button type="button" className="sign-up-button btn btn-primary border-2 py-3">SIGN-UP NOW!</button>
              <div className="d-flex align-items-center gap-3">
                <span className="mx-2">FOLLOW US</span>
                <img src={facebookLogo} alt="" />
                <img src={twitterLogo} alt="" />
                <img src={youtubeLogo} alt="" />
                <img src={pinterestLogo} alt="" />
                <img src={periscopeLogo} alt="" />
              </div>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default App
