import dcDigital from "../assets/img/buy-comics-digital-comics.png"
import dcMerchandise from "../assets/img/buy-comics-merchandise.png"
import dcSubscription from "../assets/img/buy-comics-subscriptions.png"
import dcLocation from "../assets/img/buy-comics-shop-locator.png"
import dcVisa from "../assets/img/buy-dc-power-visa.svg"

export default function DCMerchandise() {
  return (
    <div className="bottom-content bg-primary py-5">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="merch col d-flex align-items-center justify-content-evenly">
            <img className="shopping-images" src={dcDigital} alt="" />
            <a href="">DIGITAL COMICS</a>
          </div>
          <div className="merch col d-flex align-items-center justify-content-evenly">
            <img className="shopping-images" src={dcMerchandise} alt="" />
            <a href="">DC MERCHANDISE</a>
          </div>
          <div className="merch col d-flex align-items-center justify-content-evenly">
            <img className="shopping-images" src={dcSubscription} alt="" />
            <a href="">SUBSCRIPTION</a>
          </div>
          <div className="merch col d-flex align-items-center justify-content-evenly">
            <img className="shopping-images" src={dcLocation} alt="" />
            <a href="">COMIC SHOP LOCATOR</a>
          </div>
          <div className="merch col d-flex align-items-center justify-content-evenly">
            <img className="shopping-images" src={dcVisa} alt="" />
            <a href="">DC POWER VISA</a>
          </div>
        </div>
      </div>
    </div>
  )
}