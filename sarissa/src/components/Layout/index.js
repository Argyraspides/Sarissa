import Sidebar from '../Sidebar';
import Home from '../Home'
import Background from '../Background';

import './index.scss';

const Layout = () => {
    return (
    <>
        <Background/>
        <Sidebar/>
        <Home/>
    </>)
}

export default Layout;