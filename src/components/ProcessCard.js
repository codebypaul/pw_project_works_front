import styled from 'styled-components'

export default function ProcessCard(props){
    return(
        <ProCard className="card">
            <h1 className='card-title'>
                {props.title}
            </h1>
            <p className="card-text">{props.text}</p>
        </ProCard>
    )
}

const ProCard = styled.div`
    width: 50%;
`