import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withSingleData = (View) => {
    return class extends Component {
        componentDidMount() {
            this.props.fetchSingleProduct(parseInt(this.props.itemId));
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.itemId !== prevProps.itemId) {
                this.props.fetchSingleProduct(parseInt(this.props.itemId));
            }
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

export default withSingleData;