import * as React from "react"
import { Link } from "gatsby"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

import RoomListPage from '../components/rooms/RoomListPage'
import { roomListStore } from '../stores/RoomList'
import RoomDetails from "../components/rooms/RoomDetails"

function IndexSubPage(props) {
  return <div/>
}

function RoomCreate() {

}

const SecondPage = () => (
  <Layout>
    <SEO title="App" />
    <h1>Hi from the App page</h1>
    <p>Welcome to Rooms</p>

    <nav>
      <ul>
        <li><Link to="/">Go back to the homepage</Link></li>
        <li><Link to='/app/rooms'>Go to room list</Link></li>
      </ul>
    </nav>

    <Router basepath="/app">
      {/* // ...dynamic routes here */}
      <IndexSubPage path='/'/>
      <RoomListPage path='/rooms' roomList={roomListStore}/>
      <RoomDetails path="/room/:id" />
    </Router>
    
  </Layout>
)

export default SecondPage
