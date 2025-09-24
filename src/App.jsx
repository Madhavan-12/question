//import Welcomemessage from "./component/welcomemessage";

//import Welcome from "./component/Welcome"
//import Counter from "./component/Counter"
//import TechList from "./component/TechList";
//import Student from "./component/Student";
import Arrayrendering from "./component/Arrayrendering";
import WelcomeMessage,{Profile,TodoList} from "./component/WelcomeMessage";

function App(){
    const isLoggedIn = true;
  const todos = ["Learn React", "Practice JS", "Build Projects"];
  const user = { name: "Azhagu" };
  return(
    <>
      <div className="bg-amber-300">
      {/* WelcomeMessage with && rendering */}
      <WelcomeMessage isLoggedIn={isLoggedIn} />

      <hr />

      {/* TodoList with && rendering */}
      <TodoList todos={todos} />

      <hr />

      {/* Profile with && rendering */}
      <Profile user={user} />

      {/*Array rendering*/}
      <Arrayrendering />

    </div>

    </>
  )
}
export default App;