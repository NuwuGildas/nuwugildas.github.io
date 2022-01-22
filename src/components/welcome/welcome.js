import React, { useState, useEffect }  from "react";
import {useDarkMode} from "../useDarkMode";
import {useModalState} from "../modal/useModalState"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../theme"
import Toggle from "../toggler"
import ModalView from "../modal/modal";
import JSONData from '../../data.json';

import '../styles/style.css';
import LoginApp from '../login/loginApp.js';
import Cards from '../card/card.js'
import Link from '../../svg/link.svg'


function scrollToElement(e) {
    e.preventDefault();
    document.querySelector('.welcome_features').scrollIntoView({ behavior: 'smooth' });
}

function animation(type) {
    // Some random colors
    return;
    //if(type == 'light') return

    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 50;
    const balls = [];
    //const body = document.querySelector('.parent1')
    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;
        
        balls.push(ball);
        document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        let anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });

}

/* function toggleDarkMode() {
    var P_elt = document.getElementById('tdnn');
    var elt = document.getElementById('darkMode');
    if(elt.classList.contains('moon')){
        elt.classList.remove('moon');
        elt.classList.add('sun');
        P_elt.classList.add('day');
    }else{
        elt.classList.remove('sun');
        elt.classList.add('moon');
        P_elt.classList.remove('day');
    }
} */

function Welcome() {
    // const [theme, setTheme] = useState('light');
    // const themeToggler = () => {
    //     toggleDarkMode();
    //     theme === 'light' ? setTheme('dark') : setTheme('light');
    // }
    // const [theme, themeToggler] = useDarkMode();
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const [modal, index, modalToggler]  = useModalState();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const data = JSONData.map((items)=>{
        return items;
    })
    const [modules, setModule] = useState(data);

    if(!mountedComponent) return <div/>
    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles/>
                    {<ModalView contentIndex={index} Togglemodal={modalToggler} modalState={modal} theme={theme} />}
                    <Toggle theme={theme} toggleTheme={themeToggler}/>
                    <div className='parent1'>
                        <div className='main_parent' onLoad={()=>{ animation(theme) }}>
                            <div className='welcome_title alt'>
                                <div className='welcome_title_txt_cnt'>
                                    <h1 className='welcome_title_Txt'>Welcome to <br/> link...</h1>
                                    <h3>A simple, reliable and secure way to connect<br/> with family and friends all over the world ;) </h3>
                                </div>
                                <div className='welcome_title_img_Cont'>
                                    <img src={Link} style={{ 'width':'100%', 'margin-top':'4%', 'height':'100%','margin-left':'-30px'}}></img>
                                </div>
                            </div>
                            <div className='scroll_btn' onClick={(e)=>{scrollToElement(e)}}>
                                <a href="#"><span className={`${theme == 'light' ? 'darkArrow':'lightArrow'}`}></span></a>
                            </div>
                        </div>
                    <div className='welcome_features welcome_features_position'>
                        <LoginApp theme={theme}/>
                        <div className='features_desc'>
                            <div className='secondary_head_cnt'>
                                <h1 className='secondary_head_txt'>Start Now!</h1>
                                <h3 style={{'line-height':'0','font-weight':'100'}}>Register and connect in 4 different ways</h3>
                            </div>
                            <div className='card_box_cnt'>
                                {
                                    modules.map(items=>{
                                        console.log('<Cards key={'+items.id+'} Togglemodal={modalToggler} clickEvent={'+items.id+'} theme={'+theme+'} image={'+items.img+'} name={'+items.title+'} />}');
                                        return <Cards key={items.id} Togglemodal={modalToggler} clickEvent={`${items.id}`} theme={theme} image={`${items.img}`} name={`${items.title}`} />
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className='footer'> made with ❤️ by<a href='https://www.linkedin.com/in/gildas-nuwu-925454159/'> NUWU Gildas</a></div>
                </div>
            </>
        </ThemeProvider>
    );
}

export default Welcome;