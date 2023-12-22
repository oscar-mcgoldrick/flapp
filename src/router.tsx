import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import PageHome from './components/pages/PageHome'
import PageFinances from './components/pages/PageFinances'
import PageShoplists from './components/pages/PageShoplists'
import PageJoblists from './components/pages/PageJoblists'
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<PageHome />} />
      <Route path='/finances' element={<PageFinances />} />
      <Route path='/shoplists' element={<PageShoplists />} />
      <Route path='/joblists' element={<PageJoblists />} />
    </Route>
  )
)

export default router
