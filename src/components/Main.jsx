import DCMerchandise from "./DCMerchandise";
import ComicsList from "./ComicsList";
import Banner from "./Banner";

export default function Main({comics}) {
  return (
    <div className="content text-white">
      <Banner />
      <ComicsList comics={comics}/>
      <DCMerchandise />
    </div>
  )
}