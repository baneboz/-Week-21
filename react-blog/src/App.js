import "./css/App.css";

import BlogPost from "./components/BlogPost";
import Header from "./components/Header.js";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form />
        <div className="container">
          <BlogPost />
        </div>
      </main>
    </div>
  );
}

export default App;
