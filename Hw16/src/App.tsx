import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PostPage } from "./pages/posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./layouts/main";
import { ErrorBoundry } from "./components/erroeBoundry";
import { PostById } from "./pages/post-by-id";

export default function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    { path: "/", element: <div>OK</div>, errorElement: <ErrorBoundry /> },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/posts",
          element: <PostPage />,
        },
        {
          path: "/post-info/:id",
          element: <PostById />,
        },
        {
          path: "/users",
          element: <p>USERS</p>,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <div>OK</div>
      </RouterProvider>
    </QueryClientProvider>
  );
}
