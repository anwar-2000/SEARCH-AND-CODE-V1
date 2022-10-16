import React, { useState } from 'react'
import Modal from '../UI/Modal'
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import codingGif from '../../assets/coding.gif' 
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
                flex-direction: column;
                justify-content: flex-start;
                align-items : center;
                flex: 1;
        h1{
            font-size: 60px;
           ;
        }

        h2{
            font-size: 25px;
            padding-bottom: 1.5rem;
            margin: 0 5rem;
            
        }

        `
        const Right = styled.div`
               
        `
        const Paragraph = styled.div`
                    font-style: italic;
                    font-size: 0.7rem;
                    margin-left:3rem;
        `
        const Container = styled.div`
              display: flex;
              flex-direction: column;
        `
        const Images=styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            background-color: white;
            transform: translateY(-50%);
            padding-bottom: 3rem;

            img{
              width:5%;
            }
        `
    
  return <> 
             { showModal &&  <Modal  onClose = {CloseModalHandler}/>}
          <Container>
    <section className='bg-white flex justify-evenly items-center'>
                    <Left>
                    <div>
                    <h2 >
                    YOU  {' '}
                    <span style={{ color: 'green', fontWeight: 'bold' }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={[' ARE LOOKING FOR BETTER LEARNING METHOD ! ', 'HAVE US !!','CAN CODE AND SEARCH FOR WHATEVER YOU WANT' , ' CAN DO IT VIA OUR PLATFORM']}
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
                            <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white my-5 py-2 px-4 border border-green-500 hover:border-transparent rounded ' 
                            onClick={ShowModalHandler}>HOW DOES IT WORK ?</button>
                    </Left>

                    <Right>     
                            <img src={codingGif} alt="" data-aos="fade-in" data-aos-duration="2000" />
                    </Right>
    </section>
            <Images>
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