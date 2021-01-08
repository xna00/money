import React from "react";
import styled from "styled-components";

export type Props = {
    value: CategoryType,
    onChange: (category: CategoryType) => void
}

const Wrapper = styled.div`
  font-size: 24px;
  > ul{
    display:flex;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`
export type CategoryType = '收入' | '支出'
const Category: React.FC<Props> = (props) => {
    const categoryList: CategoryType[] = ['支出', '收入']
    const category = props.value
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c => <li
                    className={category === c ? 'selected' : ''}
                    onClick={() => props.onChange(c)}
                    key={c}
                >{c}</li>)}
            </ul>
        </Wrapper>
    )
}
export {Category}