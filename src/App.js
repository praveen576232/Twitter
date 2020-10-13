import React, { useEffect } from "react";

import "./App.css";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import { useStateValue } from "./stateprovider/stateprovider";
import Widgets from "./widgets/Widgets";
import Login from "./Login/Login";
import { auth } from "./firebase/firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type:"SET_USER",
          user:authuser,
        });
      } else {
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    });
    return () =>{unsubscribe()}
  },[])
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Feed />
          <Widgets />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
