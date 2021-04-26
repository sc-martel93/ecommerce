import React from 'react'
import { commerce } from './lib/commerce'

import { Products, NavBar } from './components'

const App = () => {
    return (
        <div>
            <h1>Changes</h1>
            <NavBar />
            <Products />
        </div>
    )
}

export default App
