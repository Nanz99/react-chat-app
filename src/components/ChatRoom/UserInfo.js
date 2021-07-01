import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { auth } from '../../firebase/config'
import { useAuthContext } from '../../context/AuthProvider'
const WrapperStyled = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 12px 12px;
   border-bottom: 1px solid rgba(82,38,83);
   .username{
      color: white;
      margin-left: 5px;
   }
`
export default function UserInfo() {
   const { user: { displayName, photoURL } } = useAuthContext()
   return (
      <WrapperStyled>
         <div>
            <Avatar size='small' src={photoURL}>{photoURL ? '' : displayName?.chart(0).toUpperCase()}</Avatar>
            <Typography.Text className="username">{displayName}</Typography.Text>
         </div>
         <Button ghost onClick={() => auth.signOut()}>Log out</Button>
      </WrapperStyled>
   )
}
