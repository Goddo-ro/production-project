import { Component, ErrorInfo, ReactNode } from "react";
import { PageError } from "widgets/PageError";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const hasError = this.state.hasError;
    // eslint-disable-next-line react/prop-types
    const {children} = this.props;
    if (hasError) {
        return (
            <PageError />
        )
    }

    return children;
  }
}

export default ErrorBoundary;
