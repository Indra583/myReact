import { useEffect, useState } from "react";

const useOnlineStatus = () => {
   const [onelineStatus, setOnelineStatus] = useState(true);

   useEffect(() => {

        addEventListener( "online", () => {
         setOnelineStatus(true);
        }),

        addEventListener("offline", () => {
            setOnelineStatus(false);
        })
   } ,[])

    return onelineStatus;
}

export default useOnlineStatus;