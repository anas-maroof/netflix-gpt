import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSeries = () => {
  const dispatch = useDispatch();
  const series = useSelector(store =>store.movies?.nowSeries)

  const getSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSeries(json.results));
  };
  useEffect(() => {
    !series && getSeries();
  }, []);
};

export default useSeries;

