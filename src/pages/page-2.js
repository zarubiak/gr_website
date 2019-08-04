import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>You made it to page 2! Congrats!</h1>
    <p>Unfortunately there is no reward but we'll give you a free link back to the home page!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
