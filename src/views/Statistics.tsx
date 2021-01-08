import Layout from "../compontents/Layout";
import React, {useState} from "react";
import {useRecords} from "../hooks/useRecords";
import {Category, CategoryType} from "../compontents/Category";

function Statistics() {
    const {records} = useRecords()
    const [category, setCategory] = useState<CategoryType>('收入')
    const onChange = (category: CategoryType) => setCategory(category)
    return (
        <Layout>
            <Category value={category} onChange={onChange}/>
            <ol>
                {records.map(r => <li key={r.createAt}>{r.tags}</li>)}
            </ol>
        </Layout>
    );
}

export default Statistics