//import Welcomemessage from "./component/welcomemessage";

//import Welcome from "./component/Welcome"
//import Counter from "./component/Counter"
//import TechList from "./component/TechList";
//import Student from "./component/Student";
import WelcomeMessage,{Profile,TodoList} from "./component/WelcomeMessage";

function App(){
    const isLoggedIn = true;
  const todos = ["Learn React", "Practice JS", "Build Projects"];
  const user = { name: "Azhagu" };
  return(
    <>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* WelcomeMessage with && rendering */}
      <WelcomeMessage isLoggedIn={isLoggedIn} />

      <hr />

      {/* TodoList with && rendering */}
      <TodoList todos={todos} />

      <hr />

      {/* Profile with && rendering */}
      <Profile user={user} />
    </div>

    </>
  )
}
export default App;