import bannerImage from "../assets/img/jumbotron.jpg"

export default function Banner(){
  return(
    <div className="banner">
      <img id="banner-image" src={bannerImage}/>
    </div>
  )
}