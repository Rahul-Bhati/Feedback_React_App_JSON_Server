import { BrowserRouter as Router , Route , Routes} from 'react-router-dom' ;
import './App.css';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import Feedbackform from './component/Feedbackform';
import AboutPage from './component/pages/AboutPage' ;
import AboutLinkIcon from './component/AboutLinkIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <>
      {/* <Header text={true}/>  // default proptype string ki h esliye bool pass nhi kr sakte h 
          // number or bool props m pass krne k liye {} ka use krte h
          // state two type -> global lvl or component lvl
          //   
      */
      } 
      <FeedbackProvider>
        <Router>
          
          <Header/>
          <div className='container'>
            <Routes>
              <Route path='/' exact element={
                <>
                  <Feedbackform  />
                  <FeedbackStats />
                  <FeedbackList  />
                </>
              }>
              </Route>
              <Route path='/about' element={<AboutPage />}></Route>
            </Routes>
            <AboutLinkIcon/>
          </div>
    
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
