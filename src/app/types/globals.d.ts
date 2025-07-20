declare module "*.module.css";
declare module "*.module.scss" {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}
declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly MODE: 'development' | 'production';
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
