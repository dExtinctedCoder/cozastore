import { useState, createContext } from "react"

interface contextType {
  sidebar: boolean
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
interface propsType {
  children: React.ReactNode
}
export const AppContext = createContext({} as contextType)
export const AppContextWrapper = ({ children }: propsType) => {
  const [sidebar, setSidebar] = useState(false)

  const contextValues = {
    sidebar,
    setSidebar
  }
  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  )
}
