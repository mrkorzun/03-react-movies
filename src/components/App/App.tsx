import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css["app"]}>
      <SearchBar />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
      {/* <MovieModal /> */}
    </div>
  );
};

export default App;
