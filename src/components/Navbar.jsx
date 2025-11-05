export default function Navbar(){
  
  const navbar = [
    {
      id: 1,
      link: "#",
      content: "CHARACTERS"
    },
    {
      id: 2,
      link: "#",
      content: "COMICS"
    },
    {
      id: 3,
      link: "#",
      content: "MOVIES"
    },
    {
      id: 4,
      link: "#",
      content: "TV"
    },
    {
      id: 5,
      link: "#",
      content: "GAMES"
    },
    {
      id: 6,
      link: "#",
      content: "COLLECTIBLES"
    },
    {
      id: 7,
      link: "#",
      content: "VIDEOS"
    },
    {
      id: 8,
      link: "#",
      content: "FANS"
    },
    {
      id: 9,
      link: "#",
      content: "NEWS"
    },
    {
      id: 10,
      link: "#",
      content: "SHOP"
    }
  ]

  return(
    <div className="navbar gap-4 p-0">
      {
        navbar.map((item) => (
          <a className="pages" key={item.id} href={item.link}>{item.content}</a>
        ))
      }
    </div>
  )
}