import React from 'react'

const LanguagesCode = (props) => {
    
  return (
    <div className='flex-col items-center justify-center'>
                  <div><h3 className='bg-red-500 py-3 text-center text-white font-serif font-light'>{props.language} CODE EDITOR </h3></div> 
                  <div>
            {// https://www.jdoodle.com/embed/v0/5iMF      PYTHON3 
                props.language === 'python3' && 
                <iframe src='https://www.jdoodle.com/python3-programming-online/' width="1000" height="600" title = "java"></iframe>
            }

             {  // https://www.jdoodle.com/embed/v0/5iM7    JAVA compiler 
                props.language === 'java' && 
                <iframe src='https://www.jdoodle.com/online-java-compiler/' width="1000" height="600" title = "java"></iframe>
            }
            {  // https://www.jdoodle.com/embed/v0/5iM7    JAVA compiler 
                props.language === 'html/css' && 
                <iframe src='https://www.jdoodle.com/html-css-javascript-online-editor/' width="1000" height="600" title = "java"></iframe>
            }

            { // python2.7     https://www.jdoodle.com/embed/v0/5iNu
                props.language === 'python2.7' && 
                <iframe src='https://www.jdoodle.com/python-programming-online/' width="1000" height="600" title = "java"></iframe>
            }

            { // php     https://www.jdoodle.com/embed/v0/5iNx
                props.language === 'php' && 
                <iframe src='https://www.jdoodle.com/php-online-editor/' width="1000" height="600" title = "java"></iframe>
            }

            { // swift     https://www.jdoodle.com/embed/v0/5iNx
                props.language === 'swift' && 
                <iframe src='https://www.jdoodle.com/execute-swift-online/' width="1000" height="600" title = "java"></iframe>
            }

            { // baash     https://www.jdoodle.com/embed/v0/5iNx
                props.language === 'bash' && 
                <iframe src='https://www.jdoodle.com/test-bash-shell-script-online/' width="1000" height="600" title = "java"></iframe>
            }

            { // C    https://www.jdoodle.com/embed/v0/5iNK  
                props.language === 'c' && 
                <div>
                {//<iframe src='https://www.jdoodle.com/embed/v0/5iNK' width="1000" height="600" title = "java"></iframe>
                }
                <iframe src='https://www.jdoodle.com/c-online-compiler/'width="1000" height="600" title = "java"></iframe>
                </div>
            }

            { // matlab / octav    https://www.jdoodle.com/embed/v0/5iNL
                props.language === 'matlab/octav' && 
                <iframe src='https://www.jdoodle.com/execute-octave-matlab-online/' width="1000" height="600" title = "java"></iframe>
            }

            { // assembly   https://www.jdoodle.com/embed/v0/5iNP
                props.language === 'assembly' && 
                <iframe src='https://www.jdoodle.com/compile-assembler-gcc-online/' width="1000" height="600" title = "java"></iframe>
            }

            { // c++   https://www.jdoodle.com/embed/v0/5iNV 
                props.language === 'c++' && 
                <iframe src='https://www.jdoodle.com/online-compiler-c++/' width="1000" height="600" title = "java"></iframe>
            }
            { // kotlin     https://www.jdoodle.com/embed/v0/5iNx
                props.language === 'kotlin' && 
                <iframe src='https://www.jdoodle.com/compile-kotlin-online/' width="1000" height="600" title = "java"></iframe>
            }
            </div>


            </div>
  )
}

export default LanguagesCode;