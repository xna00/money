import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavWrapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
    > ul {
      display: flex;
      justify-content: space-around;
      > li {
          padding: 5px 0;
          > a {
          display: flex;
          flex-direction: column;
          align-items: center;
              > .icon {
                width: 24px;
                height: 24px;
              } 
          &.selected {
          color:red;
          > .icon {
          fill: red;
          }
          }
          }
      }
    }
`

function Nav() {
    return <NavWrapper>
        <ul>
            <li>
                <NavLink to="/tags" activeClassName="selected">
                    <Icon name="tag"/>
                    标签</NavLink>
            </li>
            <li>
                <NavLink to="/money" activeClassName="selected">
                    <Icon name="money"/>
                    记账</NavLink>
            </li>
            <li>
                <NavLink to="/statistics" activeClassName="selected">
                    <Icon name="chart"/>
                    统计</NavLink>
            </li>
        </ul>
    </NavWrapper>
}

export default Nav