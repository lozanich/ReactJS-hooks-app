import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [data, setData] = useState({ data: [], loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setData({ data: [], loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        if (isMounted.current) {
          setData({
            data: res,
            loading: false,
            error: null,
          });
        }
      })
      .catch((error) => {
        setData({
          data: [],
          loading: false,
          error: error,
        });
      });
    // return () => {
    //   cleanup;
    // };
  }, [url]);

  return data;
};
