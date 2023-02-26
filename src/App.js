import { Route, Routes } from 'react-router';
import './App.css';
import { BasicInformation } from './pages/BasicInformation';
import { ConsultationContent } from './pages/ConsultationContent';
import { Home } from './pages/Home';
import { QuestionnaireForm } from './pages/QuestionnaireForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/step1' element={<BasicInformation />} />
        <Route path='/step2' element={<QuestionnaireForm />} />
        <Route path='/step3' element={<ConsultationContent />} />
      </Routes>
    </div>
  );
}

export default App;
