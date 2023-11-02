import { Routes, Route } from "react-router"
import Routelayout from "./components/Routelayout,"
import HomePage from "./Pages/HomePages"
import CategoryMovie from "./Pages/CategoryMovie"
import MovieDetail from "./Pages/Detail/MovieDetail"
import SearchPage from "./Pages/Search/SearchPage"



function App() {
  return (
    <Routes>
      <Route path='/' element={<Routelayout />} >
        <Route index element={<HomePage />} />
        <Route path='movie/:category' element={<CategoryMovie />} />
        <Route path='movie/detail/:id' element={<MovieDetail />} />
        <Route path='movie/search/:query' element={<SearchPage />} />
        <Route path='movie/Pages/:page' element={<moviePage />} />

      </Route>

    </Routes>
  )
}
export default App