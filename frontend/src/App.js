import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/_components/DashLayout";
import Welcome from "./features/auth/welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          {/* nested route shall protected TODO LIST */}
          {/* Calling index or you can call default ono welcome on dashboard */}
          <Route index element={<Welcome />} />
          {/* Path for note */}
          <Route path="notes">
            <Route index element={<NotesList/>}/>
          </Route>
          {/* Path For User */}
          <Route path="users">
            <Route index element={<UsersList/>}/> 
          </Route>
        </Route>{/* End Dash Route */}
      </Route>
    </Routes>
  );
}

export default App;
