import Layout from "../compontents/Layout";
import React from "react";
import useTags from "../useTags";
import styled from "styled-components";
import Icon from "../compontents/Icon";
import {Link} from "react-router-dom";
import {Button} from "../compontents/Buton";
import {Center} from "../compontents/Center";
import {Space} from "../compontents/Space";

const TagList = styled.ol`
background: white;
`
const TagItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 16px;
padding: 12px 12px 15px 0;
margin-left: 15px;
border-bottom: 1px solid #bcbbc0;
`

function Tags() {
    const {tags, setTags} = useTags()
    return (
        <Layout>
            <TagList>
                {tags.map(t =>
                    <Link to={'/tags/' + t}>
                        <TagItem key={t}>
                            <span className='one-line'>
                                {t}
                            </span>
                            <Icon name={'right'}/>
                        </TagItem>
                    </Link>)}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Space/>
                <Button>新建标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags