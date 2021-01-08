import styled from "styled-components";
import React from "react";
import useTags from "../../hooks/useTags";

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
type Props = {
    value: number[],
    onChange: (tags: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags, addTag} = useTags()
    const selectedTags = props.value
    const toggleTag = (tagId: number) => {
        props.onChange(
            selectedTags.includes(tagId) ?
                selectedTags.filter(id => id !== tagId) :
                [...selectedTags, tagId]
        )
    }
    return (
        <Wrapper>
            <ul>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => toggleTag(tag.id)}
                        className={selectedTags.includes(tag.id) ? 'selected' : ''}>
                        {tag.name}
                    </li>)}
            </ul>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}