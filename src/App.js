import Header from './component/Header';
import Post from './component/Post';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">

      <Header />
      <Post />
    </div>
  );
}

export default App;
