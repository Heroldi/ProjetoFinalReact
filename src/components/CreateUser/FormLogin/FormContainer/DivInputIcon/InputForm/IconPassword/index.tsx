import React, { useState } from "react";
import { IconPassword } from './style';

const ImgSenha: React.FC = () => {

    const [styleUser, setStyleUser] = useState(false);

    return(

        <IconPassword style={{left: styleUser ? '75%': '88%'}}>
            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0588 9.21569H15.2923V5.1848C15.2923 2.32588 12.9174 0 9.99819 0C7.07902 0 4.70407 2.32588 4.70407 5.1848V9.21569H2.94118C1.31941 9.21569 0 10.5351 0 12.1569V22.1569C0 23.7786 1.31941 25.098 2.94118 25.098H17.0588C18.6806 25.098 20 23.7786 20 22.1569V12.1569C20 10.5351 18.6806 9.21569 17.0588 9.21569ZM6.66485 5.1848C6.66485 3.40706 8.1602 1.96078 9.99819 1.96078C11.8362 1.96078 13.3315 3.40706 13.3315 5.1848V9.21569H6.66485V5.1848ZM18.0392 22.1569C18.0392 22.6975 17.5994 23.1373 17.0588 23.1373H2.94118C2.40059 23.1373 1.96078 22.6975 1.96078 22.1569V12.1569C1.96078 11.6163 2.40059 11.1765 2.94118 11.1765H17.0588C17.5994 11.1765 18.0392 11.6163 18.0392 12.1569V22.1569Z" fill="#E0E0E0"/>
                <path d="M9 17C9 16.4477 9.44772 16 10 16C10.5523 16 11 16.4477 11 17V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V17Z" fill="#E0E0E0"/>
            </svg>
        </IconPassword>
    )
}


export default ImgSenha;