import React from "react";
import './Profile.css';
import axios from "../../../api/axios";

const refresh = async () => {
        //fazer função de chamar atributos do usuario
    const response = await axios.get('/profile', {
        headers: {'Authorization': `` },
});

}


function Profile(){
    return(
        <main className="container-profile">
            <div className="container-profile-user-pic"></div>
            <div className="container-profile-user">
                <p></p>
            </div>
        </main>
    );
}

export default Profile