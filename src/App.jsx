import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NewPostPage from './pages/NewPostPage/NewPostPage';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<div>all</div>}/>
        <Route path='/post' element={<NewPostPage/>}/>
      </Routes>


    </div>
  );
}

export default App;
