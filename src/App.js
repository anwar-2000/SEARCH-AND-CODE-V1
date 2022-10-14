import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import './App.css';
import CodeEditor from './Components/codeEditor/CodeEditor';
import HeroText from './Components/HeroText/HeroText';
import Results from './Components/Results/Results';

const Wrapper = styled.section`
    width: 100%;
    padding-bottom : 5rem;
    display: flex;
    flex-direction: column;
    gap : 2rem;
`

const SelectWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 ;
`
const EditorWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 ;
`

function App() {


      const language2 = useRef('java');

      useEffect(()=>{
            
      },[language2.current.value]);

 const  selectChangeHandler= (event) =>{
          language2.current.value = event.target.value ;
          console.log(language2.current.value);
  }
  
  
  return  <>
  <div className='herotext'>
      <HeroText />
  </div>
     
      <div className='gridMain'>
    <Wrapper>
          <SelectWrapper>
          <label htmlFor="languages" className='text-white pr-6 font-bold font-serif'>CHOOSE A PROGRAMMING LANGUAGE :</label> 
           <select id='langauges' ref={language2} onChange={selectChangeHandler}>
          <option value="c">C</option>
          <option value="java">JAVA</option>
          <option value="python3">python3</option>
          <option value="python2.7">python2.7</option>
          <option value="c++"> C++</option>
          <option value="matlab/octav">MATLAB - OCTAV</option>
          <option value="assembly">ASSEMBLY .-. </option>
          <option value="php">PHP</option>
                  </select>
          </SelectWrapper>
         <Results />
           <EditorWrapper>
                      <CodeEditor language='c++' />
          </EditorWrapper>
    </Wrapper>
      </div>
  </>
}

export default App;
