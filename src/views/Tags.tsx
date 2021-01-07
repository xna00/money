import Layout from "../compontents/Layout";
import React from "react";
import useTags from "../useTags";

function Tags() {
    const {tags, setTags} = useTags()
    return (
        <Layout>
            <h1>tags</h1>
        </Layout>
    );
}

export default Tags