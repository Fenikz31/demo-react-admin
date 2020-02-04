import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'
import MyUrlField from './myUrlField'

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="password" />
            <TextField source="avatar" />
            <TextField source="address.country" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company" />
        </Datagrid>
    </List>
)