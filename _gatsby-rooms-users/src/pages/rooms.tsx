import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RoomList from '../components/rooms/RoomList'
import { roomListStore } from '../stores/RoomList'

const SecondPage = () => (
  <Layout>
    <SEO title="Rooms" />
    <h1>Hi from the Rooms page</h1>
    <p>Welcome to Rooms</p>
    <Link to="/">Go back to the homepage</Link>

    <RoomList roomList={roomListStore as any}/>
  </Layout>
)

export default SecondPage
