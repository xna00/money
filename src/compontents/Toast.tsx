import styled from "styled-components";
import React, {PropsWithChildren, useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom';

const Wrapper = styled.div`
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
};
@keyframes fade-out {
from{
opacity: 1;
}
to{
opacity: 0;
}
}
animation: fade-in ease-in-out .5s forwards;
position: absolute;
bottom: 60px;
left: 50%;
transform: translateX(-50%);
padding: .8em 2em;
background: rgba(10,10,10,0.5);
border-radius: 0.4em;
`
type Props = {
    visible: boolean
}
const Toast: React.FC<Props> = (props) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        !props.visible && (wrapperRef.current!.style.animationName = 'fade-out')
    }, [props.visible])
    return (
        <Wrapper ref={wrapperRef}>
            {props.children}
        </Wrapper>
    )
}
const showToast = (content: JSX.Element | string, showTime: number = 1000) => {
    showTime = showTime || 3000
    const div = document.createElement('div')
    document.body.appendChild(div)
    const ToastWrapper: React.FC<{ showTime: number }> = (props) => {
        const [visible, setVisible] = useState<boolean>(true)
        setTimeout(() => setVisible(false), showTime)
        return (
            <Toast visible={visible}>{props.children}</Toast>
        )
    }
    ReactDOM.render(
        <ToastWrapper showTime={showTime}>{content}</ToastWrapper>
        , div)
    setTimeout(() => div.remove(), showTime + 500 * 3)
}
export {showToast}