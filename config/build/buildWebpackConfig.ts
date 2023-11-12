import {BuildOption} from "./types/config";
import {Configuration } from 'webpack';
import buildPlugins from "./buildPlugins";
import buildRules from "./buildRules";
import buildResolvers from "./buildResolve";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import buildDevServer from "./buildDevServer";



export default function buildWebpackConfig(options: BuildOption): Configuration {

    const {mode, paths, PORT, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildRules(),
        },
        resolve: buildResolvers()
    }
}