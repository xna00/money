import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
const Main = styled.main`
flex-grow: 1;
overflow: auto;
`
type Props = {
    children: object
}
const Layout = (props: Props) => {
    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}
export default Layout