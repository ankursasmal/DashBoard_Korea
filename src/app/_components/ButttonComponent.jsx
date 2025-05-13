
'us client'
import React from 'react';

function ButttonComponent({
  text = 'Click Me',        
  onClick = () => {},
  backgroundColor="#0054A6",        
   textColor = ' #FFFFFF',     
  fontSize = '1.2rem',         
  padding = '.9rem 3rem',    
  borderRadius = '2vw ', 
  letterSpacing=''  ,
  fontweight='500'
 //   position = 'absolute',   
            
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        fontFamily:'Pretendard Variable',
        padding: padding,
        borderRadius: borderRadius,
        letterSpacing:letterSpacing,
        fontweight:fontweight

      }}
     >
      {text}
    </button>
  );
}

export default ButttonComponent;

 