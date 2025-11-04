import dcLogo from "./assets/img/dc-logo.png"

function App() {

  return (
    <div className="container">
      <header className="d-flex justify-content-between">
        <div className="logo">
          <img src={dcLogo} alt="" />
        </div>
        <div className="navbar gap-3 p-0">
          <a href="">CHARACTERS</a>
          <a href="">COMICS</a>
          <a href="">MOVIES</a>
          <a href="">TV</a>
          <a href="">GAMES</a>
          <a href="">COLECTIBLES</a>
          <a href="">VIDEOS</a>
          <a href="">FANS</a>
          <a href="">NEWS</a>
          <a href="">SHOP</a>
        </div>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
