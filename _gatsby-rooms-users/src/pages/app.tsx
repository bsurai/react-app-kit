import * as React from "react"
import { Link } from "gatsby"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

import RoomList from '../components/rooms/RoomList'
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
    <Link to="/">Go back to the homepage</Link>

    <RoomList roomList={roomListStore as any}/>

    <Link to="/app/1">Family</Link>
    <Link to="/app/2">Work</Link>

    <Router basepath="/app">
      {/* // ...dynamic routes here */}
      <IndexSubPage path='/'/>
      <RoomDetails path="/:id" />
    </Router>
    
  </Layout>
)

export default SecondPage
