
import styled from "styled-components"

const PageStyle = styled.div`
    width: 1200px;
    min-width: 300px;
    margin: 0 auto;
    background: peachpuff;
    .row {
        width: 100%;
        display:flex;
    }
`;

const Page = () => {
    return (
    <PageStyle>
        <h1>Hello Now</h1>
    </PageStyle>
    
    )
}
export default Page