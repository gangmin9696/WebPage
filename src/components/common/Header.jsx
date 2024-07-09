import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { NavLink, Link, useNavigate } from 'react-router-dom'
// NavLink는 클릭을 받으면 .active 클래스가 추가됨
import {useDispatch} from 'react-redux'
import { onChangeCategory } from '@/store/product'
import { useSelector } from 'react-redux'
import {userLogout} from '@/store/member'

const HeaderBlock = styled.div`

  background:#000;
  color:#fff; 
  .row {
    display:flex; 
    justify-content:space-between;
    align-items:center; 
  }
    
  h1{float:left; }
  h1 img{width:90px; height:auto; margin-top:20px;}

  
`

const Nav = styled.nav`
  .depth1 {
    display:flex; 
    padding:20px;
    justify-content:center;
    li {
      margin:0 50px;
      position:relative; 
      &:hover {
        .depth2 { display:block }
        border-bottom:1px solid #000;
        transition: border-bottom-color 2s ease ; 
        border-bottom:2px solid #ff5000;
      }
      a {
        text-align:center; 
        &:hover, &.active { color:#ff5000; }
      }
      .depth2 {
        position:absolute;
        top:100%;
        left:0; 
        <margin-left:-35></margin-left:-35>px;
        color:#000;
        width:150px; border:1px solid #023586;
        display:none; 
        li {
          a { padding:10px }
        }
      
      }
    }
  }
`
const OtherNav = styled.div`
  a { padding-left:25px;
    &:hover, &.active { color:#a8a8a8; }
    }
  margin-left:900px; margin-top:20px;

`

const Header = () => {
  const user = useSelector(state=>state.members.user)
  const [isUser, setIsUser] = useState(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    setIsUser(user)
  }, [user])

  const onLogout = ()=>{
    dispatch(userLogout())
    navigate("/") 
  }

  return (
    <HeaderBlock>
      <div className="row">
        
        <Nav>
          
        <h1>
          <Link to="/"><img src="./assets/image/nikeor.png" alt="" /></Link>
        </h1>
        <OtherNav>
          <NavLink to="/cart">Cart</NavLink>
          { !isUser ?
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/join">Join</NavLink>
            </>
            :
            <>
              <a href="#none" onClick={ onLogout }>Logout</a>
              <NavLink to="/join">정보수정({isUser.userName})</NavLink>
            </>
          }
        </OtherNav>

          <ul className="depth1">
            <li>
              <NavLink to="/employee">NEWS</NavLink>
            </li>
            <li>
              <NavLink to="/movie">MEN</NavLink>
            </li>
            <li>
              <NavLink to="/product" onClick={ ()=>dispatch(onChangeCategory("all")) }>WOMEN</NavLink>
              <ul className="depth2">
                <li>
                  <Link to="/product" onClick={ ()=>dispatch(onChangeCategory("bread")) }>브레드</Link>
                </li>
                <li>
                  <Link to="/product" onClick={ ()=>dispatch(onChangeCategory("cake")) }>케이크</Link>
                </li>
                <li>
                  <Link to="/product" onClick={ ()=>dispatch(onChangeCategory("sandwitch")) }>샌드위치</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/store">INFORMATION</NavLink>
            </li><li>
              <NavLink to="/store">LOCATION</NavLink>
            </li>
          </ul>
        </Nav>
        
        
      </div>
    </HeaderBlock>
  );
};

export default Header;