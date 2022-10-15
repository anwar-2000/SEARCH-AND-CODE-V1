import React from 'react'

const LanguagesCode = (props) => {
  return (
    <div className='flex-col items-center justify-center'>
                  <div><h3 className='bg-red-500 py-3 text-center text-white font-serif font-light'>{props.language} CODE EDITOR </h3> </div> 
                  <div>
            {// https://www.jdoodle.com/embed/v0/5iMF      PYTHON3 
                props.language === 'python3' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iMF' width="1000" height="600" title = "java"></iframe>
            }

             {  // https://www.jdoodle.com/embed/v0/5iM7    JAVA compiler 
                props.language === 'java' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iM7' width="1000" height="600" title = "java"></iframe>
            }

            { // python2.7     https://www.jdoodle.com/embed/v0/5iNu
                props.language === 'python2.7' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iNu' width="1000" height="600" title = "java"></iframe>
            }

            { // php     https://www.jdoodle.com/embed/v0/5iNx
                props.language === 'php' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iNx' width="1000" height="600" title = "java"></iframe>
            }

            { // C    https://www.jdoodle.com/embed/v0/5iNK  
                props.language === 'c' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iNK' width="1000" height="600" title = "java"></iframe>
            }

            { // matlab / octav    https://www.jdoodle.com/embed/v0/5iNL
                props.language === 'matlab/octav' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iNL' width="1000" height="600" title = "java"></iframe>
            }

            { // assembly   https://www.jdoodle.com/embed/v0/5iNP
                props.language === 'assembly' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iNP' width="1000" height="600" title = "java"></iframe>
            }

            { // c++   https://www.jdoodle.com/embed/v0/5iNV 
                props.language === 'c++' && 
                <iframe src='https://www.jdoodle.com/embed/v0/5iNV' width="1000" height="600" title = "java"></iframe>
            }
            </div>


            </div>
  )
}

export default LanguagesCode