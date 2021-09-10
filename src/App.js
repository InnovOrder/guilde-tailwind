import Content from "./components/Content";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Content>
        <Sidebar/>
        <MainContent/>
      </Content>
    </div>
  );
}

export default App;
