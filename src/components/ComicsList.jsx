import Card from "./Card.jsx"

export default function ComicsList({comics}) {

  return (
    <div>
      <div className="upper-content bg-dark pt-5 pb-4 text-white">
        <div className="container">
          <label htmlFor="current-series" className="btn btn-primary rounded-0 current-series">CURRENT SERIES</label>
          <div className="d-flex flex-column align-items-center">
            <div className="row row-cols-6 g-4">
              {
                comics.map((comic) => (
                  <Card key={comic.id} series={comic.series} thumb={comic.thumb}/>
                ))
              }
            </div>
            <button id="load-more" type="button" className="btn btn-primary rounded-0 px-5 mt-5">LOAD MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}