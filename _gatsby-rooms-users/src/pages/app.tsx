import * as React from "react"
import { Link } from "gatsby"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

import RoomListPage from '../components/rooms/RoomListPage'
import { roomListStore } from '../stores/RoomList'
import { roomDetailStore } from '../stores/RoomDetail'

import { documentListStore } from '../stores/DocumentList'

import RoomDetailsPage from "../components/rooms/RoomDetailsPage"
import DocumentListPage from "../components/documents/DocumentListPage"

import { getRoomLisPath } from "../utils/url"


function IndexSubPage(props) {
  return <div/>
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
      <RoomDetailsPage path="/room/:roomId" roomDetail={roomDetailStore}/>

      <DocumentListPage path='/room/:roomId/doc/:docType' documentList={documentListStore}/>
    </Router>
    
  </Layout>
)

export default SecondPage
