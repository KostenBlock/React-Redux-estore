import React from "react";
import { EStoreConsumer } from "../context";

const withEStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <EStoreConsumer>
                {
                    (eStoreService) => {
                        return (
                            <Wrapped {...props}
                                     eStoreService={eStoreService}
                            />
                        );
                    }
                }
            </EStoreConsumer>
        );
    };
};

export default withEStoreService;