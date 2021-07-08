import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 当子组件抛出异常，该方法会调用，并将error赋值给state.error
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;
    if (error) {
      return fallbackRender({ error });
    }

    return children;
  }
}
