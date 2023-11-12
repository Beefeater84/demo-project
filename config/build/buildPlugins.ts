import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import {BuildOption} from "./types/config";

export default function buildPlugins({paths}: BuildOption): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
        }),
        new ProgressPlugin()
    ]
}
