import { UserAddOutlined } from '@ant-design/icons'
import { Button, Avatar, Tooltip, Form, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Message from './Message'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;
const ButtonGroupStyled = styled.div`
   display: flex;
   align-items: center;

`
const ContentStyled = styled.div`
   height: calc(100% - 56px);
   display: flex;
   flex-direction: column;
   padding: 11px;
   justify-content: flex-end;
`
const FormStyled = styled(Form)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2px;
   border: 1px solid rgb(230,230,230);
   border-radius: 2px;

   .ant-form-item{
      flex: 1;
      margin-bottom: 0;
   }

`
const MessageListStyled = styled.div`
   max-height: 100%;
   overflow: 
`

export default function ChatWindow() {
   return (
      <>
         <HeaderStyled>
            <div className="header__info">
               <p className="header__title">Room 1</p>
               <span className="header_description">Day la Room 1</span>
            </div>
            <ButtonGroupStyled>
               <Button type="text" icon={<UserAddOutlined />}>Moi</Button>
               <Avatar.Group>
                  <Tooltip title="A">
                     <Avatar>A</Avatar>
                  </Tooltip>
                  <Tooltip title="A">
                     <Avatar>A</Avatar>
                  </Tooltip>
                  <Tooltip title="A">
                     <Avatar>A</Avatar>
                  </Tooltip>
                  <Tooltip title="A">
                     <Avatar>A</Avatar>
                  </Tooltip>
               </Avatar.Group>
            </ButtonGroupStyled>
         </HeaderStyled>
         <ContentStyled>
            <MessageListStyled>
               <Message text="Text" photoURL={null} displayName="Tung Nguyen" createdAt={1111111111111} />
               <Message text="Text" photoURL={null} displayName="Tung Nguyen" createdAt={111111111111} />
               <Message text="Text" photoURL={null} displayName="Tung Nguyen" createdAt={1111111111} />
               <Message text="Text" photoURL={null} displayName="Tung Nguyen" createdAt={111111111111111111123} />
               <Message text="Text" photoURL={null} displayName="Tung Nguyen" createdAt={111111111111111111123} />
            </MessageListStyled>
            <FormStyled>
               <Form.Item>
                  <Input 
                  bordered={false}
                  autoComplete='off'
                  placeholder="Nhap tin nhan"
                  />
               </Form.Item>
               <Button>Gui</Button>
            </FormStyled>
         </ContentStyled>
      </>

   )
}
