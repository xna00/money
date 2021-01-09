import Layout from "../compontents/Layout";
import React, {useState} from "react";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {Category, CategoryType} from "../compontents/Category";
import day from 'dayjs'
import styled from "styled-components";
import useTags from "../hooks/useTags";

const Header = styled.header`
font-size: 18px;
padding: 10px 16px;
display: flex;
justify-content: space-between;
`
const Item = styled.li`
background: white;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
display: flex;
justify-content: space-between;
> .note {
  margin-left: 16px;
  margin-right: auto;
  color: #999;
}
`
type List = {
    recordList: [
        string,

        RecordItem[]
    ]
}
const CategoryWrapper = styled.div`
background: white;
`
const RecordList: React.FC<List> = (props) => {
    const {findTag} = useTags()
    return (
        <div>
            <Header><span>{props.recordList[0]}</span><span>{props.recordList[1]
                .map(r => r.amount)
                .reduce((result, amount) => {
                    return (parseFloat(result) + parseFloat(amount)).toString()
                })}¥</span></Header>
            <ol>
                {props.recordList[1].map(r => <Item key={r.createAt}>
                    <span className="tags">{r.tags.map(tId => findTag(tId)?.name).join('、')}</span>
                    <span className="note">{r.note}</span>
                    <span className="amount">{r.amount}¥</span>
                </Item>)}
            </ol>
        </div>

    )
}

function Statistics() {
    const {records} = useRecords()
    const [category, setCategory] = useState<CategoryType>('支出')
    const onChange = (category: CategoryType) => setCategory(category)
    const selectedRecords = records.filter(r => r.category === category)
    const sortedRecords: { [K: string]: RecordItem[] } = {}
    selectedRecords.forEach(r => {
        const key = day(r.createAt).format('YYYY年MM月DD日')
        if (!(key in sortedRecords)) {
            sortedRecords[key] = []
        }
        sortedRecords[key].unshift(r)
    })
    const sortedDateArray = Object.entries(sortedRecords).sort((a, b) => {
        if (a[0] < b[0])
            return 1
        else
            return -1
    })
    console.log(sortedDateArray)
    return (
        <Layout>
            <CategoryWrapper>
                <Category value={category} onChange={onChange}/>
            </CategoryWrapper>
            {sortedDateArray.map(s => <RecordList recordList={s} key={s[0]}/>)}
        </Layout>
    );
}

export default Statistics