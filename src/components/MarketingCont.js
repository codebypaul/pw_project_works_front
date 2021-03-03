import styled from 'styled-components'

export default function MarketingCont() {
    return (
        <WeDo>
            <div className='we-do-cont'>
                    <p>Grow</p>
                </div>
                <div className='we-do-cont'>
                    <p>Brand</p>
                </div>
                <div className='we-do-cont'>
                    <p>Market</p>
                </div>
                <div className='we-do-cont'>
                    <p>Build</p>
                </div>
        </WeDo>
    )
}
const WeDo = styled.div`
    height: 75vh;
    display:flex;
    padding: 5rem 1rem;
    background: rgba(255,255,255,.9);
    .we-do-cont {
        border: 1px solid black;
    }
`