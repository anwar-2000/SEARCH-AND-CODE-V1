import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CodeEditor from './Components/codeEditor/CodeEditor';
import HeroText from './Components/HeroText/HeroText';
import Results from './Components/GoogleResults/Results';
import MainYoutube from './Components/YoutubeResults/MainYoutube';
import GoogleImage from './assets/google-1-1.svg'
import YoutubeSearch from './assets/YoutubeLogo.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";




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

      const [showGoogle , setShowGoogle]=useState(false);

      const changetoGoogle = () =>{
            setShowGoogle(true);
      }
      const changetoYoutube = () =>{
            setShowGoogle(false);
      }

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
      <div className='flex justify-center items-center gap-x-4 py-10'>
                  <img src={GoogleImage} alt="google search" className='w-1/5' onClick={changetoGoogle}/>
                  <h3 className='text-white'> OR : </h3> 
                  <img src={YoutubeSearch} alt='Youtube search' className='w-1/5' onClick={changetoYoutube}/>
      </div>
      {//****************************the main section formed like a slider
       }
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
                                 {showGoogle &&   <Results />}

                                  {!showGoogle &&  <MainYoutube />}
        </SwiperSlide>


        <SwiperSlide>
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
            
               <EditorWrapper>
                          <CodeEditor language='python3'/>
              </EditorWrapper>
    
             
        </Wrapper>
          </div>
        </SwiperSlide>
      </Swiper>
      {// ******************************************
      }
     
  </>
}

export default App;
