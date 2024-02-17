import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import 'bulma/css/bulma.min.css';

function App() {
  // const [count, setCount] = useState(0)

  function run() {
    console.log("xd")
  }


  return (
    <>
      {/* <div style={{ backgroundColor: 'black' }}> */}
      <Navbar />
      <button onClick={run} style={{ margin: "10px" }} className='button is-danger'>Run App</button>

      <Content />
      <Footer />
      {/* </div> */}
    </>
  )
}

export default App
