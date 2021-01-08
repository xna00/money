import {useEffect, useState} from "react";
import {createId} from "./lib/createId";

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
    console.log('use')
    const [tags, _setTags] = useState<Tag[]>([])
    useEffect(() => {
        console.log('local')
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
        if (tagName === null) {
            window.alert('请输入标签名')
        } else if (tagExist(tagName)) {
            window.alert('标签已存在')
        } else {
            window.alert('添加成功')
            setTags([...tags, {id: createId(), name: tagName}])
        }
    }
    const findTag = (id: number) => {
        return tags.find(tag => tag.id === id)
    }
    return {tags, setTags, addTag, findTag}
}
export default useTags