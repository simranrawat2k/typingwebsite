import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {auth} from "../firebaseConfig"

const UserInfo = ({totalTestsTaken}) => {
    const [user] = useAuthState(auth)
    return(
        <div className="user-profile">
            <div className="user">
                <div className="picture">
                    <AccountCircleIcon />
                </div>
                <div className="info">
                    <div className="email">
                        {user.email}
                    </div>
                    <div className="joined-at">
                        {user.metadata.creationTime}
                    </div>
                </div>
            </div>
            <div className="line-break"></div>
            <div className="total-tests">
                <span> Total Test Taken - {totalTestsTaken}</span>
            </div>
        </div>
    )
}

export default UserInfo;