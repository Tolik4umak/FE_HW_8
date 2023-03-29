import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AllPostsPage from './pages/AllPostsPage/AllPostsPage';
import NewPostPage from './pages/NewPostPage/NewPostPage';


function App() {

  const theme = useSelector(state => state.theme)

  return (
    <div className={[theme, 'wrapper'].join(' ')}>

      <Header/>
      
      <Routes>
        <Route path='/' element={<AllPostsPage/>}/>
        <Route path='/post' element={<NewPostPage/>}/>
      </Routes>


    </div>
  );
}

export default App;
