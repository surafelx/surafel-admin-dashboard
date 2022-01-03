const SidebarHeader = (props: any) => (
    <>
    <div className="sidebar-header">
        <div className="sidebar-header-logo">
            <span></span>
        </div>
        <div className="sidebar-header-text">
            <div className="sidebar-header-text-main">Surafel Co.</div>
            <div className="sidebar-header-text-sub">Addis Ababa, Eth</div>
        </div>
    </div>
    <style jsx>{`
    .sidebar-header {
        display: flex;
    }
    .sidebar-header-logo {
        border-radius: 8px;
        border: 1px solid #E8E8E8;
        height: 60px;
        width: 60px;
    }
    .sidebar-header-text {
        margin-left: 16px;
        text-align: justify;
    }
    .sidebar-header-text-main {
        padding-bottom: 3px;
        font-size: 1.5rem;
    }
    .sidebar-header-text-sub {
        padding-top: 3px;
        color: #969696;
        font-size: 1.25rem;
    }
    `}</style>
    </>
)

const NavLink = (props: {iconUrl: string, title: string, url: string}) => {
    return (
        <>
        <div className="navlink">
            <a className="navlink-url" href={props.url}>
                <div className="navlink-icon-url">{props.iconUrl}</div>
                <div className="navlink-title">{props.title || "NavLink Title"}</div>
            </a>
        </div>
        <style jsx>{`
        .navlink {
            background-color: rgba(0,133,255, 0);
            height: 45px;
            width: 100%;
            border-radius: 8px;
            display: flex;
            padding-left: 12px;
        }
        .navlink-url {
            text-decoration: none;
            color: #585757;
            display: flex;
            align-items: center;
        }
        .navlink-icon-url {
            height: 24px;
            width: 24px;
            background-color: blue;
        }
        .navlink-title {
            margin-left: 12px;
            font-size: 1rem;
            vertical-align: middle;
        }
        .navlink:hover {
            cursor: pointer;
            background-color: rgba(0,133,255, 0.1);
        }
        .navlink:hover .navlink-url {
            color: black;
        }
        `}
        </style>
        </>
    )
}
const NavGroup = (props: {title: string, children: any}) => {
    return (
        <>
        <div className="navgroup">
            <div className="navgroup-title">
                {props.title || "Navgroup Title"}
            </div>
            <div className="navgroup-children">
                {props.children}
            </div>
        </div>
        <style jsx>{`
        .navgroup {
            margin-top: 24px;
        }
        .navgroup-title {
            font-size: 0.75rem;
            text-transform: uppercase;
            color: #969696;
        }
        .navgroup-children {
            margin-top: 14px;
        }
        `}</style>
        </>
    )
    }


const Sidebar = (props:any) => {
    return (
        <>
        <div className="sidebar">
            <SidebarHeader />
           <NavGroup title="Main Menu">
               <NavLink iconUrl="" title="Dashboard" url=""/>
               <NavLink iconUrl="" title="Projects" url=""/>
               <NavLink iconUrl="" title="Issues" url=""/>
           </NavGroup>
           <NavGroup title="Workflows">
               <NavLink iconUrl="" title="Workflows" url=""/>
               <NavLink iconUrl="" title="My Tasks" url=""/>
           </NavGroup>
           <NavGroup title="General">
                <NavLink iconUrl="" title="Users" url=""/>
                <NavLink iconUrl="" title="Settings" url=""/>
           </NavGroup>
        </div>
            <style jsx>{`
            .sidebar {
                padding: 24px;
            }
            `}</style>
        </>
    )
}

export default Sidebar