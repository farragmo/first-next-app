import React from 'react'
import MainNavbar from './MainNavbar'

const MainLayout = (props) => {
    return (
        <div>
            <MainNavbar />
            <main >
                {props.children}
            </main>

        </div>
    )
}

export default MainLayout
