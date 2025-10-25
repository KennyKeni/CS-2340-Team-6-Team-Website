import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SiteLayout } from "./components/layout/site-layout"
import { HomePage } from "./pages/home-page"
import { NotFoundPage } from "./pages/not-found-page"
import { ProjectPage } from "./pages/project-page"

function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}

export default App
