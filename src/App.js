import React, {Component}  from 'react' 
// import CBCPropEX from "./propsex/CBCPropEX"
import FBCPropEX from "./propsex/FBCPropEx"
// function App() {
//   return (
//     <div className="App">
//       <h1 style={{color:"greenyellow"}}>Hi Hello</h1>
//     </div>
//   );
// }

// export default App;
// //! component composition
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
import './global.css'

// const App = () =>{
//   return (
//     <div className='app'>
//       <Navbar />
//       <Main/>
//       <div className='sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//       </div>
// )}




// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
// //! props
// export default class App extends Component{
//   render(){
//     return (
//       <div>
//         <CBCPropEX
//         username="manoj"
//         age = {20}
//         hobbies = {["playing","reading books"]}
//         address = {{city:"kamareddy", area:"Godown Road"}}
//         sendFun={function(){
//           alert("hi i am Manoj")
//         }}
//         />
//       </div>
//     )
//   }
// } 
function App(){
  return (
    <div>
      <FBCPropEX
      username = "Manoj"
      isReading = {true}
      hobbies = {["playing","reading books"]}/>
    </div>
  )
}
export default App;
