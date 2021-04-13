import * as React from "react"
import { Link } from "gatsby"
import { Router } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

import RoomList from '../components/rooms/RoomList'
import { roomListStore } from '../stores/RoomList'

function IndexSubPage(props) {
  return <div/>
}

function SomeSubPage(props) {
  return <div>Hi from SubPage with id: {props.id}</div>
}

const SecondPage = () => (
  <Layout>
    <SEO title="App" />
    <h1>Hi from the App page</h1>
    <p>Welcome to Rooms</p>
    <Link to="/">Go back to the homepage</Link>

    <RoomList roomList={roomListStore as any}/>

    <Link to="/app/family">Family</Link>
    <Link to="/app/work">Work</Link>

    <Router basepath="/app">
      {/* // ...dynamic routes here */}
      <IndexSubPage path='/'/>
      <SomeSubPage path="/:id" />
    </Router>
    
  </Layout>
)

export default SecondPage
