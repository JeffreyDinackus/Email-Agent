import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import 'bulma/css/bulma.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{ backgroundColor: 'black' }}> */}
      <Navbar />
      <Content />
      <Footer />
      {/* </div> */}
    </>
  )
}

export default App
