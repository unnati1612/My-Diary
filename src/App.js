import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router'
import RoutesFile from './RoutesFile';
import Header from './components/Header';

function App() {
  const navigate=useNavigate()
  const moveTo=(direction)=>{
    if(direction==="back")
    navigate(-1)
    if(direction==="next")
    navigate(1)
  }
  return (
    <div >
      <Header />
      <div className='d-flex justify-content-between align-items-center px-4 pt-3'>
      <button onClick={()=>moveTo("back")} className='btn btn-danger d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg><span>Back</span></button>
      <button onClick={()=>moveTo("next")} className='btn btn-success  d-flex align-items-center'>
      <span>Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button>
    </div>
      <RoutesFile />
    </div>
  );
}

export default App;
