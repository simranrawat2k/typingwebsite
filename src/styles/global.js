import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `


*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    background: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
    transition: all 0.25s linear;
}

.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    //grid-template-rows: auto 1fr auto;
    gap:0.5rem;
    padding: 2rem;
    width:100vw;
    align-items: center;
    text-align:center;
}

.header{
    display:flex;
    width:1000px;
    justify-content: space-between;
    align-items: center;
    margin-inline:auto;
    margin-top:20px;
}

.logo{
    width:60%;
    display: flex;
    gap:20px;
}

.icon{
    width:40%;
}

.logo .keyboard svg{
    font-size:35px;
}

.header .user-icon svg{
    font-size: 40px;
    cursor:pointer;
}

.type-box{
    display: block;
    max-width: 1000px;
    //color:rgb(128,128,128);
    //height: 140px;
    margin-inline: auto;
    overflow: hidden;
}

.words{
    font-size: 25px;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme}) => theme.typeBoxText};
    padding-top:12px;
}

.word{
    margin:5px;
    padding-right:2px;
}

.hidden-input{
    opacity: 0;
}

.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;

    @keyframes blinking{
        0% {border-left-color: ${({theme}) => theme.textColor};}
        25% {border-left-color: ${({theme}) => theme.background};}
        50% {border-left-color: ${({theme}) => theme.textColor};}
        75% {border-left-color: ${({theme}) => theme.background};}
        100% {border-left-color: ${({theme}) => theme.textColor};}
    }
}

.current-right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;

    @keyframes blinkingRight{
        0% {border-right-color: ${({theme}) => theme.textColor};}
        25% {border-right-color: ${({theme}) => theme.background};}
        50% {border-right-color: ${({theme}) => theme.textColor};}
        75% {border-right-color: ${({theme}) => theme.background};}
        100% {border-right-color: ${({theme}) => theme.textColor};}
    }
}

.correct{
    color:${({theme}) => theme.correct};
}

.incorrect{
    color: ${({theme}) => theme.incorrect};
}

.upper-menu{
    display:flex;
    width: 1000px;
    margin-inline: auto;
    font-size: 1.35rem;
    justify-content: space-between;
    padding:0.5rem;
}

.modes{
    display:flex;
    gap: 0.4rem;
}

.time-mode:hover{
    color:rgb(128,128,128);
    cursor:pointer;
}

.footer{
    width: 1000px;
    display: flex;
    justify-content: end;
    margin-inline: auto;
}

.themeButton{
    width:180px;
    color: black;
    background: white;
    height:38px;
}

.stats-box{
    display: flex;
    width: 100%;
    height:auto;
    margin-inline: auto;
    margin-top:50px;
}

.left-stats{
    width: 30%;
    padding:0px;
    display:flex;
    text-align: start;
    justify-content: center;
    flex-direction: column;
}

.right-stats{
    width:70%;
}

.title{
    font-size: 20px;
    color: ${({theme}) => theme.typeBoxText};
    margin-top:5px;
}

.sub-title{
    font-size: 20px;
}

.user-page{
   width:1000px;
   margin-inline:auto;
   margin-top:20px;
}

.user-profile{
    width: 100%;
    margin: auto;
    display: flex;
    height: 15rem;
    background: ${({theme})=> theme.typeBoxText};
    border-radius: 20px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.user{
    width: 49%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    padding: 1rem;
    //border-right: 2px solid;
}


.info{
    width: 60%;
    padding: 1rem;
    //margin-top: 1rem;
}

.info .email{
    margin-bottom:15px;
}

.picture{
    width: 40%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.user .picture svg{
    transform: scale(6);
}

.user-profile .line-break{
    width:2px;
    height:95%;
    background: ${({theme})=> theme.textColor};
}

.total-tests{
    width: 49%;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.table, .graph-user-page{
    margin: auto;
    width: 100%;
}

.center-of-screen{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
}

`