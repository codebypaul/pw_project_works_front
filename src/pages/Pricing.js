import styled from 'styled-components'
import {PageWrapper} from '../components/designComps'
import ProcessCard from '../components/ProcessCard'

export default function Pricing() {
    return (
        <PageWrapper>
            <DevProcess>
                <h1 className='text-center'>Our development process</h1>
                <div className="row m-0">
                    <div className="col-md-4">
                        <ProcessCard title='Requirement Gathering' />
                    </div>
                    <div className="col-md-4">
                        <ProcessCard title='Website Prototype' />
                    </div>
                    <div className="col-md-4">
                        <ProcessCard title='First Mockup' />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-md-6 px-5">
                        <ProcessCard title='Performance Check' />
                    </div>
                    <div className="col-md-6 px-5">
                        <ProcessCard title='Going Live' />
                    </div>
                </div>

            </DevProcess>
        </PageWrapper>
    )
}

const DevProcess = styled.div`
    background: blue;
`