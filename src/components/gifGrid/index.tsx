import axios from "axios";
import React, { CSSProperties, FC, useEffect } from "react";
import { useGetGifs } from "../../hooks/GetGifs";
import GifGridItem from "../gifGridItem";

interface IProps {
  category: string;
}

const GifGrid: FC<IProps> = (props) => {
  //  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source());
  const cancelToken = axios.CancelToken.source();

  const { data, loading } = useGetGifs(props.category, cancelToken);

  useEffect(() => {
    return () => {
      cancelToken.cancel();
    };
  }, [props.category]);

  const css_div: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  return (
    <div>
      <p>{props.category}</p>
      {loading && <p>"Cargando"</p>}
      <div style={css_div}>
        {data.map((obj) => (
          <div key={obj.id} className="animate__fadeInDownBig animate__slow">
            <GifGridItem imagen={obj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
