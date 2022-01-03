import { TextFieldWithIcon } from '../Form/Input'
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@mui/material'

export const ProfileBarButton = (props: {icon: any, title: string, children: any, }) => {
    return (
<>
<div className="profilebar-button">
        <div className="profilebar-icon">
            <Icon>
                {props.icon}
            </Icon>
        </div>
        <div className="profilebar-badge"></div>
        <div className="profilebar-title">
            {props.title}
        </div>
    </div>
    <div className="profilebar-dropdown">
    <div className="profilebar-dropdown-content">
        {props.children}
    </div>
    </div>
    <style jsx>{`
    .profilebar-button {
        display: flex;
        align-items: center;
    }
    .profilebar-title {
        display: ${props.title === "" ? "none" : "block"}
    }
    .profilebar-dropdown {
       display: inline-block;
       position: relative;
    }
    .profilebar-dropdown-content {
        height: 300px;
        display: block;
        position: absolute;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 2;
    }
    `}
    </style>
    </>
    )
}


export const ProfileBar = (props: any) => {
    return (
        <>
            <div className="profilebar">
                <div className="profilebar-notification">
                    <ProfileBarButton title={""} icon={<SearchIcon/>}>
                        <div></div>
                    </ProfileBarButton>
                </div>
                <div className="profilebar-messages">
                <ProfileBarButton title={""} icon={<SearchIcon/>}>
                        <div></div>
                    </ProfileBarButton>
                </div>
                <div className="profilebar-profile">
                <ProfileBarButton title={"Surafel"} icon={<SearchIcon/>}>
                        <div></div>
                    </ProfileBarButton>
                </div>
            </div>
            <style jsx>{`
            .profilebar {
                display: flex;
                align-items: center;
            }
            `}</style>
        </>
    )
}




export const TopBar = (props: any) => {
    return(
        <>
        <div className="topbar">
            <div className="topbar-content">
                <div className="topbar-searchbar">
                    <TextFieldWithIcon placeholder="  Search">
                        <SearchIcon/>
                    </TextFieldWithIcon>
                </div>
                <div className="topbar-profilebar">
                    <ProfileBar />
                </div>
            </div>
           
        </div>
        <style jsx>{`
        .topbar {
            width: 100%;
        }
        .topbar-content {
            display: flex;
            justify-content: space-between;
        }
        .topbar-profilebar {
            display: flex;
            align-items: center;
        }
        `}</style>
        </>
    )
}

export default TopBar