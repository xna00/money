import Layout from "../compontents/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
 background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ul { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       cursor: pointer;
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
const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      outline: none;
    }
  }
`
const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &:nth-child(1)::after{
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
const NumberPadSection = styled.section`

`

function Money() {
    return (
        <Layout>
            <TagsSection>
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>收入</li>
                    <li>支出</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Money
