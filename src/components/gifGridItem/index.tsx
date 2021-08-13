import axios, { CancelTokenSource } from "axios";
import React, { CSSProperties, FC, useEffect, useState } from "react";

import { IImage } from "../../interfaces/IImage";

interface IProps {
  imagen: IImage;
}

const card: CSSProperties = {
  border: "1px solid grey",
  borderRadius: "6px",
  marginBottom: "10px",
  marginRight: "10px",
  overflow: "hidden",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

const css_p: CSSProperties = {
  padding: "5px",
  textAlign: "center",
};
const img: CSSProperties = {
  maxHeight: "170px",
};

const GifGridItem: FC<IProps> = (props) => {
  const [imageBlod, setImageBlod] = useState<any>(undefined);

  async function buscarImagen(active: boolean, cancelToken: CancelTokenSource) {
    try {
      let result = await axios.get(props.imagen.url, {
        cancelToken: cancelToken.token,
        responseType: "blob",
      });
      console.log("result", result);
      if (active) {
        setImageBlod(URL.createObjectURL(result.data));
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }
    }
  }
  useEffect(() => {
    let active = true;
    let cancelToken = axios.CancelToken.source();

    buscarImagen(active, cancelToken);
    return () => {
      cancelToken.cancel();

      active = false;
    };
  }, []);

  return (
    <>
      {imageBlod ? (
        <div style={card} className="animate__bounceIn animate__slow">
          <img style={img} src={imageBlod} alt="#" />

          <p style={css_p}> {props.imagen.title}</p>
        </div>
      ) : (
        <p style={{margin:'50px'}}>Loading...</p>
      )}
    </>
  );
};
export default GifGridItem;
