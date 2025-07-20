import { Configuration } from 'webpack-dev-server'
import { BuildOptions } from "./types/config";
import path from 'path';

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        // 1) don’t ever list directories
        static: {
            directory: path.resolve(__dirname, 'dist'),
            serveIndex: false,
        },
        // 2) SPA fallback, but allow dots in URL without error
        historyApiFallback: {
            disableDotRule: true,
        },
        hot: true,
    }
}
