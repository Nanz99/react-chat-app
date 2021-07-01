import React from 'react'
import UserInfo from './UserInfo'
import { Col, Row } from 'antd'
import RoomList from './RoomList'
import styled from 'styled-components'


const SideBarStyled = styled.div`
   background: #3f0e40;
   color:#fff;
   height: 100vh
`
export default function SideBar() {
   return (
      <SideBarStyled>
         <Row >
            <Col span={24}><UserInfo /></Col>
            <Col span={24}><RoomList /></Col>
         </Row>
      </SideBarStyled>

   )
}
