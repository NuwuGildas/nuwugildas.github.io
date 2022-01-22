import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomePage from './components/welcome/welcome.js';
/* import Modal from './components/modal/modal.js' */
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
// hooks for link parameters useParams
ReactDOM.render(
  // <WelcomePage />,
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome"/>} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/features/:feature" element={<ComingSoon/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>,
  document.getElementById('root')
);

function ComingSoon() {
  const navigate = useNavigate();
  const {feature} = useParams();
  return(
    <div className='coming_parent'>
      <div className='coming_msg'> {feature} is coming soon</div>
      <div className='coming_parent_img'>
        <img className='coming_img' src='/images/svg/coming_soon .svg'></img><br/>
        <label>Page under Construction</label>
        <button onClick={()=>{navigate(-1)}} className='coming_btn'>go back</button>
      </div>
    </div>
  )
}
function NotFound() {
  const navigate = useNavigate();
  const {feature} = useParams();
  return(
    <div className='coming_parent'>
      {/* <div className='coming_msg'> {feature} is coming soon</div> */}
      <div className='coming_parent_img'>
        <img className='coming_img' src='/images/svg/coming_soon .svg'></img><br/>
        <label>Ooops Page Not Found</label>
        <button onClick={()=>{navigate(-1)}} className='coming_btn'>go back</button>
      </div>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
