
import Nav from "./components/Nav";
import ContenidoIndex from "./components/ContenidoIndex";
import Index from "./components/Index";
import { BrowserRouter, NavLink, Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>

      
      <Nav></Nav>
      
    </div>
  );
}

export default App;
