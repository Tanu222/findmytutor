import {HomePage,Error,TutorDetail,TutorList,AddTutor, Register} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar,Footer} from './components';

function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add-tutor' element={<AddTutor/>}/>
      <Route path='/tutor-list' element={<TutorList/>}/>
      <Route path='/tutor-detail' element={<TutorDetail/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
