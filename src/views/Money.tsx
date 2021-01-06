import Layout from "../compontents/Layout";
import styled from "styled-components";
import React from "react";
import CategorySection from "./Money/CategorySection";
import NotesSection from "./Money/NotesSection";
import NumberPadSection from "./Money/NumberPadSection";
import TagsSection from "./Money/TagsSection";


const MoneyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`

function Money() {
    return (
        <MoneyLayout>
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
                <div className="output">100</div>
                <div className="pad">
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
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MoneyLayout>
    );
}

export default Money
