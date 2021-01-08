import React from "react";
import {Category, Props} from "../../compontents/Category";
import styled from "styled-components";

const Wrapper = styled.section`
background: #c4c4c4;
`
const CategorySection: React.FC<Props> = (props) => {
    const category = props.value
    return (
        <Wrapper>
            <Category value={category} onChange={props.onChange}/>
        </Wrapper>
    )
}
export {CategorySection}