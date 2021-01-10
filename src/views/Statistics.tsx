import Layout from "../compontents/Layout";
import React, {useEffect, useState} from "react";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {Category, CategoryType} from "../compontents/Category";
import day from 'dayjs'
import styled from "styled-components";
import useTags from "../hooks/useTags";
import {Chart} from "../compontents/Chart";
import {EChartOption} from "echarts";

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
type RecordListType = [
    string,
    RecordItem[],
    number
]
type List = {
    recordList: RecordListType
}
const CategoryWrapper = styled.div`
background: white;
`
const RecordList: React.FC<List> = (props) => {
    const {findTag} = useTags()
    return (
        <div>
            <Header><span>{props.recordList[0]}</span><span>{props.recordList[2]}¥</span></Header>
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
    const groupedArray: RecordListType[] = sortedDateArray.map(a => {
        return [...a, a[1].map(r => parseFloat(r.amount)).reduce((result, amount) => result + amount)]
    })
    let data: { date: string, total: number }[] = []
    const today = day(Date.now())
    for (let i = 0; i < 30; i++) {
        const day = today.subtract(i, 'd')
        const aDayRecords = groupedArray.find(a => a[0] === day.format('YYYY年MM月DD日'))
        data.unshift({
            date: day.format('MM-DD'),
            total: aDayRecords ? aDayRecords[2] : 0
        })
    }
    const date = data.map(d => {
        return d.date
    })
    const total = data.map(d => {
        return d.total.toString()
    })
    const op: EChartOption = {
        tooltip: {
            position: 'top',
            formatter: '{c}',
            padding:[0,5],
            textStyle: {
                lineHeight:10,

            }
        },
        grid: {
            left: 0, right: 0, bottom: 20, top: 40,
        },
        xAxis: {
            data: date,
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },

        },

        yAxis: {show: false},
        series: [{
            type: 'line',
            data: total,
            lineStyle: {
                color: '#666'
            },
            symbol: 'circle',
            symbolSize: 12

            , itemStyle: {
                color: '#666',
            }
        }
        ],
    }
    const [option, setOption] = useState<EChartOption>(op)
    useEffect(() => {

        setOption({...op})
    }, [category, records])
    return (
        <Layout>
            <CategoryWrapper>
                <Category value={category} onChange={onChange}/>
            </CategoryWrapper>
            <Chart option={option}/>
            {groupedArray.map(s => <RecordList recordList={s} key={s[0]}/>)}
        </Layout>
    );
}

export default Statistics