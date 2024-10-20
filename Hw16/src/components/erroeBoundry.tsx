import React from "react";
import { UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom";
import { NotFoundPage } from "../pages/notFound";

export const ErrorBoundry: React.FC = () => {
  const error = useRouteError();

  if ((error as UNSAFE_ErrorResponseImpl).status === 404) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div>SOMTHING WENT WRONG</div>
      <p>{(error as Error).message}</p>
    </>
  );
};
