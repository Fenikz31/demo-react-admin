import React from 'react'
import { Admin, Resource } from 'react-admin'

import Dashboard from './components/dashboard'
import {
  PostCreate,
  PostEdit,
  PostList
} from './components/posts'
import { UserList } from './components/users'

import authProvider from './provider/authProvider'

import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'

import logo from './logo.svg'
import './App.css'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)


export default App;
