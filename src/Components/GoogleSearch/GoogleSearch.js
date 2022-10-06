import React, { useEffect } from 'react'

const GoogleSearch = () => {
    useEffect(()=>{
        // eslint-disable-next-line no-unused-expressions
        (function() {
            //var cx = '111:xxx';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=65533adef18cf46d4';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);}
            )}
    )
  return (
    <div className="gcse-searchbox"/>
  )
}
export default GoogleSearch

