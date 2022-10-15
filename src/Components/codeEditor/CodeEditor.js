import React, { useEffect} from 'react'
import LanguagesCode from './LanguagesCode';

const CodeEditor = (props) => {    

    useEffect(()=>{
                        <LanguagesCode language={props.language} />
    },[props.language]);
  return <>

                <LanguagesCode language={props.language} />
  </>
    
  
}

export default CodeEditor