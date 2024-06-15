import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackPluginInstance, ProgressPlugin, DefinePlugin} from "webpack";
import {BuildOption} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildPlugins({paths, isDev}: BuildOption): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[id].[contenthash].css",
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })
    ]
}
