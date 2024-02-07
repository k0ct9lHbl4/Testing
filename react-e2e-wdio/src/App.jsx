import { Navbar } from "./components/navbar/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Navbar />
      <AppRouter />
    </div>
    // </BrowserRouter>
  );
}

export default App;
