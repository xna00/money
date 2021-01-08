import React from "react";
import Layout from "../compontents/Layout";
import {
    useParams
} from "react-router-dom";

type Params = {
    id: string
}
const Tag = () => {
    const {id} = useParams<Params>()
    return (
        <Layout>
            hi
            {id}
        </Layout>
    )
}
export default Tag