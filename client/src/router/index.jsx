import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";

const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Login />,
                path: "/login",
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: "/",
                        loader: async () => {
                            const query = `query ExampleQuery {
                                folders {
                                  id
                                  name
                                  createdAt
                                }
                              }`;

                            const res = await fetch("http://localhost:4000/graphql", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                },
                                body: JSON.stringify({
                                    query,
                                }),
                            });

                            const { data } = await res.json();
                            console.log({ data });
                            return data;
                        },
                        children: [
                            {
                                element: <NoteList />,
                                path: `folders/:folderId`,
                                loader: async ({ params: { folderId } }) => {
                                    console.log("loader", { folderId });
                                    const query = `query ExampleQuery($folderId: String) {
                                        folder(folderId: $folderId) {
                                          id
                                          name
                                          notes {
                                            id
                                            content
                                          }
                                        }
                                      }`;

                                    const res = await fetch("http://localhost:4000/graphql", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Accept: "application/json",
                                        },
                                        body: JSON.stringify({
                                            query,
                                            variables: {
                                                folderId: folderId,
                                            },
                                        }),
                                    });

                                    const { data } = await res.json();
                                    console.log("[Note List]", { data });
                                    return data;
                                },
                                children: [
                                    {
                                        element: <Note />,
                                        path: `note/:noteId`,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
