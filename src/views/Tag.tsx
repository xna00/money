import React from "react";
import Layout from "../compontents/Layout";
import {
    useParams
} from "react-router-dom";
import useTags from "../useTags";

type Params = {
    id: string
}
const Tag = () => {
    const {id} = useParams<Params>()
    const {findTag} = useTags()
    const tag = findTag(parseInt(id) || 0)
    return (
        <Layout>
            hi
            {tag ? tag.name : 'tag不存在'}
        </Layout>
    )
}
export default Tag