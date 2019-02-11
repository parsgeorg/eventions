import React from 'react'
import FlashMessagesList from '../../components/ui/flash/FlashMessagesList';
import Sidebar from 'components/sidebar'

const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <FlashMessagesList/>
            </div>
            <div className='row'>
                <div className='col-md-9'>
                    {children}
                </div>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
            </div>
        </div>
    </div>
)

export default Layout
