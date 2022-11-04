import React, { useState } from 'react'
import Modal from '../UI/Modal'
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import coding3d from '../../assets/coding3d.mp4' 
import clickMe from '../../assets/clickMe2.gif' 
import Php from '../../assets/php-1.svg'
import Assembly from '../../assets/assembly.svg'
import Clanguage from '../../assets/c-1.svg'
import CPlus from '../../assets/c.svg'
import Java from '../../assets/java.svg'
import python from '../../assets/python-3.svg'
import html from '../../assets/html.svg'
import swift from '../../assets/swift.svg'
import bash from '../../assets/bash.svg'
import kotlin from '../../assets/kotlin.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'

const Main = () => {
        const [showModal , setShowModal] = useState(false);


        const ShowModalHandler = ()=>{
            setShowModal(true);
        }

        const CloseModalHandler = ()=>{
          setShowModal(null); 
      }




        const Left = styled.div`
                display: flex;
                flex-direction: column ;
                justify-content: space-around !important;
               
                flex: 1;
                width: 100%;
                

                .ThisIsNav ul {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      gap: 80px;
                      transform: translate(50px,-115px);
                      font-family: 'Poor Story', cursive;
                }
                .ThisIsNav ul li:first-child() {
                      flex: 1;
                }

                button{
                  transform: translate(95%,20px);
                }
                img{
                    border-radius: 50% 50%;
                    width: 15%;
                 //  transform: translateX(40%);
                  }
              label{
                transform: translate(80%,20px);
                z-index: 15;
              }
        h1{
            font-size: 60px;
            font-family: 'Poor Story', cursive;
        }

        h2{
            font-size: 25px;
            padding-bottom: 1.5rem;
            margin: 0 5rem;
            font-family: 'Poor Story', cursive;
        }

        `
        const Right = styled.div`
            overflow: hidden;
                video {
                      margin: 2.5rem;
                      border-radius: 15px;
                      border-top-left-radius: 60% !important;
                      transform: translateX(5rem);
                      filter: drop-shadow(-7mm 2mm 4mm #C2A4D8);
                }
        `
        const Paragraph = styled.div`
                    font-style: italic;
                    font-size: 0.9rem;
                    margin-left:5rem;

                 
        `
        const Container = styled.div`
              display: flex;
              flex-direction: column !important;
        `
        const Images=styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            transform: translateY(-70%);
            img{
              width:5%;
            }
        `
    
  return <> 
             { showModal &&  <Modal  onClose = {CloseModalHandler}/>}
          <Container>
    <section className='bg-gradient-to-b from-violet-300 to-fuchsia-200 flex justify-evenly items-center backdrop-blur-xl '>
            <Left>
                    <div className='ThisIsNav'>
                            <ul>
                                <li>Search2Code</li>
                              
                            </ul>
                    </div>
                    <div className='willbeNav'>
                    <h2>
                    YOU ARE LOOKING FOR BETTER LEARNING METHOD !  {' '}
                    <span style={{ color: 'green', fontWeight: 'bold' }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={['YOU', 'HAVE US !!']}
                        loop={6}
                        cursor
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={90}
                        delaySpeed={1500}
                      />
                    </span>
                  </h2>    
                  </div>
                            <Paragraph>
                            HELLO FUTUR DEVELOPERS  ,
                                        <p>
                                        Since am a developer too ... we know that we encounter some problems while putting our first steps 
                                        at coding , one of them is keeping up with some youtube tutorials or code in a website
                                        ... WELL , i built this website FOR YOU , for US ! devlopers to help learn and code at the same time !
                                        <span style={{color:'green'}}> HOW ? </span> 
                                        <br/>
                                        you can code and execute your code in the live Editor , stuck ? , look for some tutorials either via our custom youtube search 
                                        or via  the custom google search <span style={{color:'green'}}>(SOME WEBSITES BLOCK THE IFRAME , SORRY !)</span> 
                                        </p>
                            </Paragraph>
                            <label htmlFor='clickme'> TUTORIAL HERE : </label>
                            <button  
                            onClick={ShowModalHandler}>
                            <img id='clickme' src={clickMe} alt=''/>
                           </button>
                    </Left>

                    <Right>     
                           <video style={{width: '90%', height: '100%'}} autoPlay muted loop src={coding3d} type="video/mp4" />      
                    </Right>
    </section>
            <Images data-aos="fade-in" data-aos-duration="3000">
                      <img src={Clanguage}  alt="C" data-aos="flip-left" />
                      <img src={Java}  alt="C" data-aos="flip-left"/>
                      <img src={Assembly}  alt="C" data-aos="flip-left"/>
                      <img src={Php}  alt="C" data-aos="flip-left"/>
                      <img src={python}  alt="C" data-aos="flip-left"/>
                      <img src={CPlus}  alt="C" data-aos="flip-left"/>
                      <img src={swift}  alt="C" data-aos="flip-left"/>
                      <img src={kotlin}  alt="C" data-aos="flip-left"/>
                      <img src={html}  alt="C" data-aos="flip-left"/>
                      <img src={css}  alt="C" data-aos="flip-left"/>
                      <img src={javascript}  alt="C" data-aos="flip-left"/>
                      <img src={bash}  alt="C" data-aos="flip-left"/>
          </Images> 
    </Container>
 


    
  </>  
}

export default Main