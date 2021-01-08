import Layout from "../compontents/Layout";
import styled from "styled-components";
import React, {useState} from "react";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagsSection} from "./Money/TagsSection";


const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as number[],
        note: '',
        category: '收入' as '收入' | '支出',
        amount: '0'
    })
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MoneyLayout>
            <TagsSection value={selected.tags} onChange={tags => onChange({tags})}/>
            <NoteSection value={selected.note} onChange={note => onChange({note})}/>
            <CategorySection value={selected.category} onChange={category => onChange({category})}/>
            <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}/>
        </MoneyLayout>
    );
}

export default Money
