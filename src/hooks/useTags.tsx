import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {showToast} from "../compontents/Toast";

const defaultTags = (): Tag[] => [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
]
type Tag = {
    id: number,
    name: string
}
const useTags = () => {
    const [tags, _setTags] = useState<Tag[]>([])
    useEffect(() => {
        const localTags = JSON.parse(window.localStorage.getItem('tags') || JSON.stringify(defaultTags()))
        setTags(localTags)
    }, [])
    const setTags = (tags: Tag[]) => {
        _setTags(tags)
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }
    const tagExist = (tagName: string) => {
        for (let i = 0; i < tags.length; i++)
            if (tags[i].name === tagName)
                return true
        return false
    }
    const addTag = () => {
        const tagName = window.prompt('请输入标签名')
        if (tagName === null || tagName === '') {
            showToast('标签名不能为空')
        } else if (tagExist(tagName)) {
            showToast('标签已存在')
        } else {
            showToast('添加成功')
            setTags([...tags, {id: createId(), name: tagName}])
        }
    }
    const findTag = (id: number) => {
        return tags.find(tag => tag.id === id)
    }
    const filterTag = (id: number) => tags.filter(tag => tag.id !== id)
    const deleteTag = (id: number) => {
        setTags(filterTag(id))
    }
    const updateTag = (id: number, name: string) => {
        setTags(filterTag(id).concat({id, name}))
    }
    return {tags, setTags, addTag, findTag, deleteTag, updateTag}
}
export default useTags