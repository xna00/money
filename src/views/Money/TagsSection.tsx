import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ul { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       cursor: pointer;
       &.selected {
       background: red;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
    outline: none;
    cursor: pointer;
  }
`
const TagsSection = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const addTag = () => {
        const tagName = window.prompt()
        if (tagName) {
            setTags([...tags, tagName])
        }
    }
    const toggleTag = (tag: string) => {
        setSelectedTags(
            selectedTags.includes(tag) ?
                selectedTags.filter(t => t !== tag) :
                [...selectedTags, tag]
        )
    }
    return (
        <Wrapper>
            <ul>
                {tags.map(tag =>
                    <li key={tag} onClick={() => toggleTag(tag)}
                        className={selectedTags.includes(tag) ? 'selected' : ''}>
                        {tag}
                    </li>)}
            </ul>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}