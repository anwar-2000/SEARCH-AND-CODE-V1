
import './App.css';
import Editor from './Components/Editor';
import GoogleSearch from './Components/GoogleSearch/GoogleSearch';
import Header from './Components/Header/Header';
import HeroText from './Components/HeroText/HeroText';

function App() {
  return  <>
      <HeroText />
      <div className='gridMain'>
      <GoogleSearch />
      <Editor/>
      </div>
  </>
}

export default App;
