import { RoutesWrapper } from "./routes"
import { AppContextWrapper } from "./context/appContext"
import { lazy, Suspense } from "react"
const SideMenu = lazy(() => import("./components/sidemenu"))
const Header = lazy(() => import("./components/header"))
const Footer = lazy(() => import("./components/footer"))
const Loading = lazy(() => import("./components/loading"))

function App() {
  return (
    <Suspense fallback={<Loading fullscreen />}>
      <AppContextWrapper>
        <div className="min-h-screen bg-white flex flex-col flex-wrap">
          <SideMenu />
          <Header />
          {/* Routes */}
          <RoutesWrapper />
          <Footer />
        </div>
      </AppContextWrapper>
    </Suspense>
  )
}

export default App
