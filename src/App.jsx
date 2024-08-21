import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import New from './Compo/New'
import Banner from './Compo/Banner'
import Footer from './Compo/Footer'
import Freebook from './Compo/Freebook'
// import Navb from './Compo/Navb'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <New/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </div>
  )
}

export default App
