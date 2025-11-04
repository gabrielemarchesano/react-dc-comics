import dcDigital from "../img/buy-comics-digital-comics.png"
import dcMerchandise from "../img/buy-comics-merchandise.png"
import dcSubscription from "../img/buy-comics-subscriptions.png"
import dcLocation from "../img/buy-comics-shop-locator.png"
import dcVisa from "../img/buy-dc-power-visa.svg"

export default function DCMerchandise() {
  return (
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
  )
}