import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'

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
            <TextField source="website" />
            <TextField source="company" />
        </Datagrid>
    </List>
)