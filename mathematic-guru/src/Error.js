import React from 'react';

class Error extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        error: null,
                        errorInfo: null
                };
        }

        componentDidCatch(error, errorInfo) {
                // You can also log the error to an error reporting service
                this.setState({
                      error: error,
                      errorInfo: errorInfo
                })
        }

        render() {
                console.log(this.state.errorInfo);
                if (this.state.errorInfo) {
                // Error path
                return (
                <div>
                  <h2>Something went wrong.</h2>
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </details>
                </div>
              );
            }
            return this.props.children;
        }
}
export default Error;
