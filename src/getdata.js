import React, {useState,useEffect} from "react";
// import "/.squares";

export default function GetData()  {
 

    const [tokens,setToken] = useState({});

    async function fetchData() {
         const res = await fetch ("http://localhost:8000/api/app_api/");
             res
              .json()
              .then(res => setToken(res));
      }
     useEffect(() => {
        fetchData();
     }, [])

      const inputtoken = JSON.stringify(tokens)
      console.log(inputtoken);

    return 


}

