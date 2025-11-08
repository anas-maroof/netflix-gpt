import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addSeriesAir } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSeriesAir = () => {
  const dispatch = useDispatch();
  const seriesAir = useSelector(store => store.movies?.nowSeriesAir)
  const getSeriesAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSeriesAir(json.results));
  };
  useEffect(() => {
    !seriesAir && getSeriesAir();
  }, []);
};

export default useSeriesAir;

