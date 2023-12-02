import React, { useRef, useState } from "react";
import axios from "../../../api/axios";

function UserConfig() {
    
    const handleSubmit = async (e) => {
        const response = await axios.post("/config",
            JSON.stringify({ }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            }
        );        
    }



    return(
        <main>
            
        </main>
    );
}

export default UserConfig;