import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
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

const NoteSection = () => {
    const [note, setNote] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onBlur = () => {
        if (inputRef.current) {
            console.log(inputRef.current.value)
        }
    }
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text"
                       ref={inputRef}
                       placeholder="在这里添加备注"
                       defaultValue={note}
                       onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}
export {NoteSection}