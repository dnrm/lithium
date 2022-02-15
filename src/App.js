import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app border-t-4 border-teal-700 grid grid-cols-4">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
