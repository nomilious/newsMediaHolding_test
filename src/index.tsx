import 'antd/dist/reset.css';
import App from 'app/App';
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StoreProvider>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </StoreProvider>,
    );
}
