import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { appStore } from "../config/appStore";

interface IStoreProvider {
    children?: ReactNode;
}

export const StoreProvider: FC<IStoreProvider> = ({children}) => {
    return (
        <Provider store={appStore}>
            {children}
        </Provider>
    );
};
