// function App() {
//   return (
//     <div className="App">
//       <h1 style={{color:"greenyellow"}}>Hi Hello</h1>
//     </div>
//   );
// }

// export default App;
//! component composition
import React  from 'react' 
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footer from './components/Footer'
import './global.css'

const App = () =>{
  return (
    <div className='app'>
      <Navbar />
      <Main/>
      <div className='sidebar'>
        <Sidebar1/>
        <Sidebar2/>
      </div>
      <Footer/>
      </div>
)}




// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
export default App;
