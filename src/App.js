import './App.css';
import Post from './components/posts';
import PostForm from './components/postForm';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <PostForm />
       <Post />
      </header>
    </div>
    </Provider>
  );
}

export default App;
