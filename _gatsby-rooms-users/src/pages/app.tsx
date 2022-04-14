import * as React from "react"
import { Link } from "gatsby"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

import RoomListPage from '../components/rooms/RoomListPage'
import { roomListStore } from '../stores/RoomList'
import RoomDetailsPage from "../components/rooms/RoomDetailsPage"
import { getRoomLisPath } from "../utils/url"
import DocumentListPage from "../components/document-types/DocumentListPage"

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
        <li><Link to={getRoomLisPath()}>Go to room list</Link></li>
      </ul>
    </nav>

    <Router basepath="/app">
      {/* // ...dynamic routes here */}
      <IndexSubPage path='/'/>
      <RoomListPage path='/rooms' roomList={roomListStore}/>
      <RoomDetailsPage path="/room/:id" />
      <DocumentListPage path='/document/:documentType'/>
    </Router>
    
  </Layout>
)

export default SecondPage
