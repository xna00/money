import Layout from "../compontents/Layout";
import styled from "styled-components";
import React, {useState} from "react";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagsSection} from "./Money/TagsSection";
import {_RecordItem, useRecords} from "../hooks/useRecords";


const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
const defaultSelected: _RecordItem = {
    tags: [],
    note: '',
    category: '收入',
    amount: '0'
}

function Money() {
    const [selected, setSelected] = useState<_RecordItem>(defaultSelected)
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const {addRecord} = useRecords()
    const onOk = () => {
        if (selected.tags.length === 0) {
            window.alert('请选择标签')
        } else {
            addRecord(selected)
            setSelected({...defaultSelected})
        }
    }
    return (
        <MoneyLayout>
            <TagsSection value={selected.tags} onChange={tags => onChange({tags})}/>
            <NoteSection value={selected.note} onChange={note => onChange({note})}/>
            <CategorySection value={selected.category} onChange={category => onChange({category})}/>
            <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})} onOk={onOk}/>
        </MoneyLayout>
    );
}

export default Money
