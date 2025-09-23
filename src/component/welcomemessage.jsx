import React from "react";

// ✅ WelcomeMessage component
function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      <h1>Welcome to the site!</h1>
      {isLoggedIn && <p>You are logged in ✅</p>}
    </div>
  );
}

export default WelcomeMessage;

// ✅ TodoList component
function TodoList({ todos }) {
  return (
    <div>
      <h2>My Todos</h2>
      {todos.length > 0 && (
        <ul>
          {todos.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ✅ Profile component
function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      {user && user.name && <p>Name: {user.name}</p>}
    </div>
  );
}
export {Profile,TodoList};



