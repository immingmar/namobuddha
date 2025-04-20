import {css} from "styled-components";

//This is a utility function that performs a common task
export const mobile =  (props) => {
    return css `
        @media only screen and (max-width: 432px) {
            ${props}          
        }
    `;
};