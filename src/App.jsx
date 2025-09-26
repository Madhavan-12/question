//import Welcomemessage from "./component/welcomemessage";

//import Welcome from "./component/Welcome"
//import Counter from "./component/Counter"
//import TechList from "./component/TechList";
//import Student from "./component/Student";
import { Route, Routes } from "react-router-dom";
import Arrayrendering from "./component/Arrayrendering";
import Banner from "./component/Task/Banner";
import Count from "./component/Task/Count";

import Footer from "./component/Task/Footer";
import Navbar from "./component/Task/Navbar";
import Showoff from "./component/Task/showoff";
import WelcomeMessage,{Profile,TodoList} from "./component/WelcomeMessage";
import Fibonacci from "./component/Task/fibonacci";

function App(){
    /*const isLoggedIn = true;
  const todos = ["Learn React", "Practice JS", "Build Projects"];
  const user = { name: "Azhagu" };*/
  return(
    <>
     
     {/* 
      <div className="bg-amber-300">
      {/* WelcomeMessage with && rendering 
      <WelcomeMessage isLoggedIn={isLoggedIn} />

      <hr />

      {/* TodoList with && rendering 
      <TodoList todos={todos} />

      <hr />

      {/* Profile with && rendering 
      <Profile user={user} />

      {/*Array rendering*
      <Arrayrendering />

    </div>
   */}
   
   <Navbar />
   <Routes>
    <Route path="/" element={<Banner />}/>
    <Route path="/Fibonacci" element={<Fibonacci />} />
    <Route path="/Count" element={<Count />} />
   </Routes>
    </>
  )
}
export default App;