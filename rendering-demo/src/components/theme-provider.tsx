import {createContext,useContext} from 'react'


type Theme= {
    colors:{
        primary:string,
        secondary:string,
    }
}

const defaultTheme: Theme = {
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
    },
  };