import React from 'react'
import {Link} from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About Page</title>
            <h1>About Me!</h1>
            <p>Hello there, I'm Joseph and this is my first Gatsby site!</p>
            <Link to='/'>Home</Link>
        </main>
    )
}

export default AboutPage
