import React, {useState} from "react";
import Layout from "../compontents/Layout";
import {
    Link,
    useParams
} from "react-router-dom";
import useTags from "../useTags";
import styled from "styled-components";
import Icon from "../compontents/Icon";
import {Button} from "../compontents/Buton";
import {Center} from "../compontents/Center";
import {Space} from "../compontents/Space";
import {Input} from "../compontents/Input";

type Params = {
    id: string
}
const Topbar = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background:white;
`
const InputWrapper = styled.div`
margin-top: 16px;
background: white;
`
const Tag = () => {
    const {id: idString} = useParams<Params>()
    const id = parseInt(idString)
    const {findTag, deleteTag, updateTag} = useTags()
    const tag = findTag(id)
    let newName = tag?.name || ''
    const tagContent = (
        <div>
            <InputWrapper>
                <Input label={'标签名'}
                       placeholder={tag?.name}
                       onChange={(e) => newName = e.target.value}
                />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={() => {
                    updateTag(id, newName)
                    window.alert('修改成功')
                }}>修改完成</Button>
                <Space/>
                <Button onClick={() => deleteTag(id)}>删除标签</Button>
            </Center>
        </div>)
    return (
        <Layout>
            <Topbar>
                <Link to='/tags'>
                    <Icon name={'left'}/>
                </Link>
                编辑标签
                <Icon/>
            </Topbar>
            {tag ? tagContent : <Center>标签不存在</Center>}
        </Layout>
    )
}
export default Tag