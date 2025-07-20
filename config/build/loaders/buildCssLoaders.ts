import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoaders(isDev: boolean) {
    return [
        // CSS files
        {
            test: /\.css$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
            ],
        },
        // SCSS/SASS files
        {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                            localIdentName: isDev
                                ? "[path][name]_[local]"
                                : "[hash:base64:8]",
                        },
                    },
                },
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions: {
                            logger: {
                                warn: (message: string) => {
                                    if (
                                        message.includes(
                                            "Deprecation The legacy JS API is deprecated",
                                        )
                                    ) {
                                        return;
                                    }
                                    console.warn(message);
                                },
                            },
                        },
                    },
                },
            ],
        },
    ];
}
