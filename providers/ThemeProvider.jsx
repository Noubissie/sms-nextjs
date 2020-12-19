import {useContext} from "react"
import {ThemeProvider} from "styled-components"

export const ThemeContext = ()=> (useContext("light"))
const theme={a:"light"}
const toggleTheme = 2
export default ({children}) => {
    // let {theme, toggleTheme} = useDarkMode()
    return (
        <ThemeProvider
            theme={theme}
            toggleTheme={toggleTheme}
            >
        <>
            {children}
        </>
       </ThemeProvider>

    )
}