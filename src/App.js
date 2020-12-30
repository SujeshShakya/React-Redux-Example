import logo from './logo.svg';
import './App.css';
import Post from './components/posts';
import PostForm from './components/postForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
       <Post />
      </header>
    </div>
  );
}

export default App;
