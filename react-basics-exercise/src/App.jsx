import React from "react";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Card from "./components/Card";
import Accordion from "./components/Accordion";
import TodoApp from "./components/TodoApp";

export default function App() {
  const user1 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const user2 = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://i.imgur.com/4AiXzf8.jpeg",
    imageSize: 70,
  };

  return (
    <div className="app-root">
      <h1>React Basics Exercise</h1>

      <Card title="Profile 1">
        <UserProfile userData={user1} theme="light" />
      </Card>

      <Card title="Profile 2">
        <UserProfile userData={user2} theme="dark" />
      </Card>

      <Counter />

      <Login />

      <Accordion />

      <TodoApp />
    </div>
  );
}
