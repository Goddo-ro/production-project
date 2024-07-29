import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.build,
            filename: '[name].[fullhash].js',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
          },
        resolve: buildResolvers(options),
        devtool: options.mode === 'development' ? 'inline-source-map' : undefined,
        devServer: options.mode === 'development' ? buildDevServer(options) : undefined,
    };
}