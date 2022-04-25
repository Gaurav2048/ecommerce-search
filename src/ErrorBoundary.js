import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          error: false,
          name: "Gunjan"
      }
    }

    // static getDerivedStateFromProps (props, state) {
    //     return  {
    //         ...state,
    //         ...props
    //     }
    // }

    static getDerivedStateFromError(error) {
        return { error: true }
    }

    render() {
        return this.state.error ? <ErrorComponent /> : this.props.children
    }
}

export default ErrorBoundary;

const ErrorComponent = () => {
    return <div>
        There is an error
        <button onClick={e=> {
            window.location.href = "/"
        }}>Move to root</button>
    </div>
}