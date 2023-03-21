import "./css/App.css";

import BlogPost from "./components/BlogPost";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <BlogPost />
        </div>
      </main>
    </div>
  );
}

export default App;
