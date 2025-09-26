//import Welcomemessage from "./component/welcomemessage";

//import Welcome from "./component/Welcome"
//import Counter from "./component/Counter"
//import TechList from "./component/TechList";
//import Student from "./component/Student";
import Arrayrendering from "./component/Arrayrendering";
import Banner from "./component/Task/Banner";
import Count from "./component/Task/Count";
import Fibonacci from "./component/Task/fibonacci";
import Navbar from "./component/Task/Navbar";
import WelcomeMessage,{Profile,TodoList} from "./component/WelcomeMessage";

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
   <Banner />
   <Count />
   <Fibonacci />
    </>
  )
}
export default App;