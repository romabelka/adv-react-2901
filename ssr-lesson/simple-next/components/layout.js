import React from 'react'
import PropTypes from 'prop-types'
import Head from "./head";
import Nav from "./nav";

function Layout(props) {
    return (
        <div>
            <Head title={props.title} />
            <Nav />
            {props.children}
        </div>
    )
}

Layout.propTypes = {
}

export default Layout
