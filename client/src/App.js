import { HomePage, Error, TutorDetail, TutorList, AddTutor, Register, ProtectedRoute,MyProfile } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-tutor' element={<ProtectedRoute><AddTutor /></ProtectedRoute>} />
          <Route path='/tutor-list' element={<ProtectedRoute><TutorList /></ProtectedRoute>} />
          <Route path='/tutor-detail/:tutorId' element={<ProtectedRoute><TutorDetail /></ProtectedRoute>} />
          <Route path='user-profile' element={<ProtectedRoute><MyProfile/></ProtectedRoute>} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  ); 
}

export default App;
