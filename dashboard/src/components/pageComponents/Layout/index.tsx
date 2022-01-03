import Sidebar from '../../Sidebar'
import TopBar from '../../TopBar'

export const Layout = (props: any) => {
    return (
        <>
        <div className="layout-container">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="content">
            <div className="topbar"> 
                <TopBar /> 
            </div>
            <div className="main">{props.children}</div>
            <div className="footer">Footer</div> 
        </div>
        </div>
    <style jsx>{`
    .sidebar {
        position: fixed;
        width: 251px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: white;
        overflow-x: hidden;
    }
    .content {
        margin-left: 299px;
        padding: 22px;
    }
    .main {
        margin-top: 80px;
    }
    .topbar {
    position: fixed;
    top: 0;
    padding-top:24px;
    width: 200px;
    overflow: hidden;
    height: 80px;
    background-color: #F7F7F7;
    }
    .rightbar {
        background-color: black;
    }
    .main {
        background-color: #F7F7F7;
    }
    .footer {
        background-color: blue;
    }
    `}</style>
        </>
    )
}

export default Layout