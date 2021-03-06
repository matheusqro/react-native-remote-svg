import React from "react";
import { Image } from "react-native";
import { SvgImage } from "./SvgImage";

const MyImage = ({ source, style = {}, ...props }) => {
  const resolveAssetSource = Image.resolveAssetSource;
  source = resolveAssetSource(source);
  if (source && source.uri && source.uri.match(".svg")) {
    if (source.__packager_asset && typeof style !== "number") {
      if (!style.width) {
        style.width = source.width;
      }
      if (!style.height) {
        style.height = source.height;
      }
    }
    return <SvgImage {...props} source={source} style={style} />;
  } else {
    return <Image {...props} source={source} style={style} />;
  }
};

export default MyImage;
