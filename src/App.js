import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Newcontact from './pages/NewContact/newcontact';
import Notfound from './pages/NotFound/notfound';
import UpdateContact from './pages/UpdateContact/UpdateContact';
import Contactlist from './pages/ContactList/Contactlist';
import Header from './components/Header/Header';

// import Header from './components/Header/Header';


function App() {
  return (
    <>
   <Header/>
        <Routes>
          <Route path="/" element={<Contactlist/>} /> 
          <Route path="/new-contact" element={<Newcontact/>} /> 
          <Route path="/update-contact" element={<UpdateContact/>} /> 
          <Route path="*" element={<Notfound/>} /> 
        </Routes>

    </>
  );
}

export default App;



