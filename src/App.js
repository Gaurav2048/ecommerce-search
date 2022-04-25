import React from "react";
import Route from "./Route";
import ErrorBoundary from "./ErrorBoundary";
import StoreWrapper from "./StoreWrapper";
import Header from "./Header";

const App = () => {
    return <ErrorBoundary>
        <StoreWrapper>
           <Route />
        </StoreWrapper>
     </ErrorBoundary>
}

export default App;