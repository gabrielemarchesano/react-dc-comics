import dcDigital from "../img/buy-comics-digital-comics.png"
import dcMerchandise from "../img/buy-comics-merchandise.png"
import dcSubscription from "../img/buy-comics-subscriptions.png"
import dcLocation from "../img/buy-comics-shop-locator.png"
import dcVisa from "../img/buy-dc-power-visa.svg"

export default function DCMerchandise() {
  return (
    <div className="container">
      <div className="row justify-content-around align-items-center">
        <div className="col d-flex align-items-center justify-content-evenly">
          <img className="shopping-images" src={dcDigital} alt="" />
          <a href="">DIGITAL COMICS</a>
        </div>
        <div className="col d-flex align-items-center justify-content-evenly">
          <img className="shopping-images" src={dcMerchandise} alt="" />
          <a href="">DC MERCHANDISE</a>
        </div>
        <div className="col d-flex align-items-center justify-content-evenly">
          <img className="shopping-images" src={dcSubscription} alt="" />
          <a href="">SUBSCRIPTION</a>
        </div>
        <div className="col d-flex align-items-center justify-content-evenly">
          <img className="shopping-images" src={dcLocation} alt="" />
          <a href="">COMIC SHOP LOCATOR</a>
        </div>
        <div className="col d-flex align-items-center justify-content-evenly">
          <img className="shopping-images" src={dcVisa} alt="" />
          <a href="">DC POWER VISA</a>
        </div>
      </div>
    </div>
  )
}