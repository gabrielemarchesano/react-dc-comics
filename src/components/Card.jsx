export default function Card({id, thumb, series}) {
  return (
    <div className="col" key={id}>
      <div className="card rounded-0">
        <div className="img-container">
          <img src={thumb} alt="" className="img-top" />
        </div>
        <div className="body py-2">
          <h6>{series}</h6>
        </div>
      </div>
    </div>
  )
}