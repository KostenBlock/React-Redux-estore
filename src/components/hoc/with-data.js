import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        componentDidMount() {
            this.props.fetchProducts();
        }

        render() {
            const { loading, error } = this.props;

            if (loading) {
                return <Spinner/>;
            }

            if (error) {
                return <ErrorIndicator/>;
            }

            return <View
                {...this.props}
            />;

        };
    };
};

export default withData;