import SearchBox from "../../components/searchBox/SearchBox";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to dictionary query</h1>
      <SearchBox />
    </div>
  );
};

export default Home;
