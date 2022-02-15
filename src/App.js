import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app border-t-4 border-yellow-500 flex">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
