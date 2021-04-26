import React from 'react'
import { commerce } from './lib/commerce'

import { Products, NavBar } from './components'

const App = () => {
    return (
        <div>
            <NavBar />
            <Products />
        </div>
    )
}

export default App
