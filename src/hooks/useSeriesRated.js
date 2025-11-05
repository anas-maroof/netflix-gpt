import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addSeriesRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSeriesRated = () => {
  const dispatch = useDispatch();

  const getSeriesRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSeriesRated(json.results));
  };
  useEffect(() => {
    getSeriesRated();
  }, []);
};

export default useSeriesRated;

