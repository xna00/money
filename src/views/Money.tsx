import Layout from "../compontents/Layout";
import styled from "styled-components";
import React from "react";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagsSection} from "./Money/TagsSection";


const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`

function Money() {
    return (
        <MoneyLayout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </MoneyLayout>
    );
}

export default Money
