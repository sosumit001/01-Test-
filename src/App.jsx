

import './App.css'
import Header from './Header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Projects from './Projects';

const SiteArticle = () => {
  
  return(
    <article className="site-article">
      <div className="article-img">
        <img src="../public/imgs/sumit-so-img.jpg" alt="" />
      </div>
      <div className="article-description">
      <span className='home-aritcle-title'>Hi, THIS IS <b style={{"textDecoration":"underline wavy skyblue"}}>SUMIT SO</b></span >
       <p>I work with <span >React, HTML5 Canvas(2D Designs), ThreeJS, Webassembly <br/> and Frontend designs</span></p>
      </div>
    </article>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
      <Route path='/' element = {<SiteArticle/>}/> 
      <Route path='/projects' element = {<Projects/>}/> 
      <Route path='/contacts' element = {<div className='site-projects'>
        <p>no contact added yet</p>
      </div>} />
      </Routes>
    </Router>
    {/* <div className="site-projects"></div> */}
    </div>
  )
}

export default App
