import DCMerchandise from "./DCMerchandise";
import ComicsList from "./ComicsList";

export default function Main() {
  return (
    <main className="content text-white">   
      <ComicsList />
      <DCMerchandise />
    </main>
  )
}