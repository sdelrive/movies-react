import "./App.css";

// antd
import { Layout } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// header
import MenuTop from "./components/MenuTop/MenuTop";
// paginas
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <BrowserRouter>
        <Header>
          <MenuTop />
        </Header>

        <Content>
          <Routes>
            <Route path="/" ecxat={true} element={<Home />} />
            <Route path="/new-movies" ecxat={true} element={<NewMovies />} />
            <Route path="/popular" exact={true} element={<Popular />} />
            <Route path="/search" exact={true} element={<Search />} />
            <Route path="/movie/:id" exact={true} element={<Movie />} />
            <Route path="*" exact={true} element={<Error404 />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
