import {useEffect, useState} from "react";
import {CategoryType} from "../compontents/Category";

export type _RecordItem = {
    tags: number[],
    note: string,
    category: CategoryType,
    amount: string
}
type RecordItem = {
    createAt: string
} & _RecordItem
const useRecords = () => {
    const [records, _setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        const localRecords = JSON.parse(window.localStorage.getItem('records') || '[]')
        _setRecords(localRecords)
    }, [])
    const setRecords = (records: RecordItem[]) => {
        _setRecords(records)
        window.localStorage.setItem('records', JSON.stringify(records))
    }
    const addRecord = (record: _RecordItem) => {
        setRecords([...records,
            {...record, createAt: new Date().toISOString()}
        ])
    }
    return {records, setRecords, addRecord}
}
export {useRecords}