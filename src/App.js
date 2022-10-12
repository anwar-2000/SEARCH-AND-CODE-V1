

import styled from 'styled-components';
import './App.css';
import Editor from './Components/Editor';
//import GoogleSearch from './Components/GoogleSearch/GoogleSearch';
import HeroText from './Components/HeroText/HeroText';
import Results from './Components/Results/Results';

const Wrapper = styled.section`
    width: 200vw ;
    display: flex;
    gap: 5rem;
    align-content: center;
    justify-content: space-around;
    overflow-x : scroll ;
`

function App() {
  return  <>
      <HeroText />
      <div className='gridMain'>
     {/* <GoogleSearch />*/}
     <Wrapper>
      <Results />
      <Editor/>
      </Wrapper>
      </div>
  </>
}

export default App;
