import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoaders = buildCssLoaders(isDev)
    const svgLoaders = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
    const assetLoader = {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]', // This keeps the folder structure intact
            outputPath: 'public/', // Specify the output path relative to the `output` property in your webpack config
        },
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]'
        }
    };
    return [
        babelLoader,
        typescriptLoader,
        ...cssLoaders,
        svgLoaders,
        assetLoader,
        fontLoader
    ];

}
