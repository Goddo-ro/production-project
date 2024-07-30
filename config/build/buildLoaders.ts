import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
              ? "[path][name]__[local]--[contenthash:5]"
              : "[contenthash:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, sassLoader, typescriptLoader];
}
