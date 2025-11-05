import DCMerchandise from "./components/DCMerchandise"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <div>
      <Header/>
      <main>
        <section className="content text-white">
          <div className="upper-content bg-dark py-5">
            <div className="container">
              <span> --{">"} Content goes here {"<"}-- </span>
            </div>
          </div>
          <div className="bottom-content bg-primary py-5">
            <DCMerchandise/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
