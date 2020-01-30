import React from 'react'
import { Admin, Resource } from 'react-admin'
import { UserList } from './components/users'
import { PostList } from './components/posts'
import jsonServerProvider from 'ra-data-json-server'
import logo from './logo.svg'
import './App.css'

const dataProvider = jsonServerProvider('https://jsonplaceholder.ir/');
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
)


export default App;
