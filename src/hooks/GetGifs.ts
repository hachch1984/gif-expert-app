import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { IImage } from "../interfaces/IImage";

export const useGetGifs = (
  category: string,
  cancelToken: CancelTokenSource
) => {
  async function Call() {
    if (category !== "") {
      try {
        setState({ data: [], loading: true });
        let urlGif = `https://api.giphy.com/v1/gifs/search?api_key=sA12ORjWlqVd1YZglU3C4V1pLYLueJot&q=${encodeURI(
          category
        )}&limit=10`;
        let response = await axios.get(urlGif, {
          cancelToken: cancelToken.token,
        });
        let arrData = response.data.data as [];
        var arr = arrData.map(
          (obj: any) =>
            ({
              id: obj.id,
              title: obj.title,
              url: obj.images.downsized_medium.url,
            } as IImage)
        );
        console.log("function Call", category, arr);
        setState({ data: arr, loading: false });
      } catch (error) {
        setState({ data: [], loading: false });
        if (axios.isCancel(error)) {
          return;
        }
      }
    }
  }

  const [state, setState] = useState<{ loading: boolean; data: IImage[] }>({
    loading: false,
    data: [],
  });

  useEffect(() => {
    Call();
  }, [category]);

  return state;
};
