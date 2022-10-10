
import './App.css';
import Editor from './Components/Editor';
import GoogleSearch from './Components/GoogleSearch/GoogleSearch';
import HeroText from './Components/HeroText/HeroText';
import Results from './Components/Results/Results';

function App() {
  return  <>
      <HeroText />
      <div className='gridMain'>
     {/* <GoogleSearch />*/}
      <Results />
      {/*<Editor/>*/}
      </div>
  </>
}

export default App;
