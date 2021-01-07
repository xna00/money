import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      outline: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
  }
`
type Props = {
    value: string,
    onChange: (amount: string) => void,
    onOk?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
    // ?
    // const [output] = useState(props.value)
    const output = props.value
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        let newOutput = output
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) {
            return
        }
        if (text.length === 1 && text >= '0' && text <= '9') {
            if (newOutput === '0')
                newOutput = text
            else
                newOutput += text
        } else if (text === '.' && !newOutput.includes('.')) {
            newOutput += '.'
        } else if (text === '清空') {
            newOutput = '0'
        } else if (text === '删除') {
            newOutput = newOutput.slice(0, -1) || '0'
        } else if (text === 'OK' && props.onOk) {
            props.onOk()
        } else {
            return
        }
        if (newOutput.length >= 16)
            newOutput = newOutput.slice(0, 17)
        props.onChange(newOutput)
    }
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad" onClick={onClickButtonWrapper}>
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
        </Wrapper>
    )
}
export {NumberPadSection}