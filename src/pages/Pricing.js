import styled from 'styled-components'
import {PageWrapper} from '../components/designComps'
import ProcessCard from '../components/ProcessCard'

export default function Pricing() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
        <PageWrapper>
            <h1 className='text-center my-5'>Our development process</h1>
            <div className="card w-75 mx-auto p-4 mb-5">
                {lorem}
            </div>
            <DevProcess>
                <div className="container-fluid text-center">
                    <div className="row py-5">
                        <ProcessCard title='Requirement Gathering' text={lorem} />
                    </div>
                    <div className="row py-5">
                        <ProcessCard title='Website Prototype' text={lorem}/>
                    </div>
                    <div className="row py-5">
                        <ProcessCard title='First Mockup' text={lorem}/>
                    </div>
                    <div className="row py-5">
                        <ProcessCard title='Performance Check' text={lorem}/>
                    </div>
                    <div className="row py-5">
                        <ProcessCard title='Going Live' text={lorem}/>
                    </div>
                </div>

            </DevProcess>
            <PricingArea>
                <div className='price-card basic'>
                    <h3>Basic</h3>
                    <button className='package-btn btn'>Continue</button>
                </div>
                <div className='price-card advanced'>
                    <h3>Advanced</h3>
                    <button className='package-btn btn'>Continue</button>
                </div>
                <div className='price-card custom'>
                    <h3>Ground Up</h3>
                    <button className='package-btn btn'>Continue</button>
                </div>
            </PricingArea>
        </PageWrapper>
    )
}

const DevProcess = styled.div`
    background: blue;
    padding: 5rem 0;
`

const PricingArea = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    height: 75vh;
    width: 100%;
    .price-card {
        width: 25%;
        height: 75%;
        border-radius: .5rem;
        text-align: center;
        transition: transform .3s;
    }
    .package-btn {
        bottom: 0;
        transition: transform .5s;
        border-radius: 1.5rem;;
        background: white;
        padding: .5rem 2rem;
    }
    .price-card:hover {
        transform: scale(1.25);
        .package-btn {
            position: relative;
            bottom: 0;
            transform: scale(1.25);
        }
    }
    .basic{
        background: blue;
    }
    .advanced{
        background: red;
    }
    .custom{
        background: green;
    }
`