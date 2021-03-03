import styled from 'styled-components'
import logo from '../images/logo.png'

export default function HomeAnimation() {
    return (
        <AnimationContainer>
            <div className="globe"></div>
            <div className="globe two"></div>
            <div id='earth'></div>
        </AnimationContainer>
    )
}
const AnimationContainer = styled.div`
    background: linear-gradient(45deg, var(--lightBlue),rgba(200,200,200,1));
    height: 100vh;
    width: 100%;
    z-index: -1;
    position: fixed;
    top: 0;
    .globe {
        background-image: url(${logo});
        background-size: cover;
        position: absolute;
        top: 3rem;
        width: 20rem;
        height: 20rem;
        border: 2px dashed white;
        border-radius: 50%;
        animation: spin linear 30s infinite forwards;
    }
    .globe.two {
        background-image: none;
        width: 40rem;
        height: 40rem;
        left: 15rem;
        top: 15rem;
        border-style: dashed;
        border-width: 2px;
        border-color: white;
        animation: spin linear 50s infinite forwards;
    }
    #earth{
        position: absolute;
        top: 18rem;
        left: 18rem;
        width: 35rem;
        height: 35rem;
        opacity: .5;
        background: url(https://web.archive.org/web/20150807125159if_/http://www.noirextreme.com/digital/Earth-Color4096.jpg);
        border-radius: 50%;
        background-size: cover;
        box-shadow: inset 8px 36px 80px 36px rgb(0, 0, 0), inset -6px 0 12px 4px rgba(255, 255, 255, 0.3);
        animation: rotate linear 15s infinite forwards;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg)
        }
    }
    @keyframes rotate {
        from {
            background-position: right;
        }
        to {
            background-position: left;
        }
    }

`