import biggerLogo from "../assets/img/dc-logo-bg.png"
import facebookLogo from "../assets/img/footer-facebook.png"
import twitterLogo from "../assets/img/footer-twitter.png"
import youtubeLogo from "../assets/img/footer-youtube.png"
import pinterestLogo from "../assets/img/footer-pinterest.png"
import periscopeLogo from "../assets/img/footer-periscope.png"

export default function Footer(){
  return(
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
              <img id="bigger-logo" src={biggerLogo} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer py-5 bg-dark">
        <div className="container d-flex justify-content-between">
          <button type="button" className="sign-up-button btn btn-primary border-2 py-3">SIGN-UP NOW!</button>
          <div className="d-flex align-items-center gap-3">
            <a className="follow-link" href=""><span className="mx-2">FOLLOW US</span></a>
            <a href=""><img src={facebookLogo} alt="" /></a>
            <a href=""><img src={twitterLogo} alt="" /></a>
            <a href=""><img src={youtubeLogo} alt="" /></a>
            <a href=""><img src={pinterestLogo} alt="" /></a>
            <a href=""><img src={periscopeLogo} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}