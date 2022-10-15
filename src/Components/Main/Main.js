import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import codingGif from '../../assets/coding.gif' 
import Php from '../../assets/php-1.svg'
import Assembly from '../../assets/assembly.svg'
import Clanguage from '../../assets/c-1.svg'
import CPlus from '../../assets/c.svg'
import Java from '../../assets/java.svg'
import python from '../../assets/python-3.svg'

const Main = () => {
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
            justify-content: flex-end;
            gap: 1.5rem;
            background-color: white;
            padding-right: 3rem;
            padding-bottom: 3rem;

            img{
              width:5%;
            }
        `
    
  return <> 
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
                            <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white my-5 py-2 px-4 border border-green-500 hover:border-transparent rounded'>WHAT NOW ?</button>
                    </Left>

                    <Right>     
                            <img src={codingGif} alt='coding image' />
                    </Right>
    </section>
            <Images>
                      <img src={Clanguage}  alt="C"/>
                      <img src={Java}  alt="C"/>
                      <img src={Assembly}  alt="C"/>
                      <img src={Php}  alt="C"/>
                      <img src={python}  alt="C"/>
                      <img src={CPlus}  alt="C"/>
            </Images>
    </Container>
 


    
  </>  
}

export default Main