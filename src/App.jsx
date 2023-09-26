import React, { useState } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./component/Root";
import AddPost from "./page/AddPost";
import Create from "./page/Create";
import Home from "./page/Home";
import Modify from "./page/Modify";
import ModifyPost from "./page/ModifyPost";
import NotFound from "./page/NotFound";

function App() {
  const [auth, setAuth] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "tharaa",
      age: 21,
      phone: "433567888",
      address: "karto",
      title: " iam learning front-end and now train on the react",
      gmail: "tharaaIbrahem@gmail.com",
      password: 111222333,
    },
    {
      id: 2,
      name: "majd",
      age: 24,
      phone: "49987638",
      address: "banias",
      gmail: "majdAlfarfor@gmail.com",
      password: 444555666,
      title: " he is programmed and he loves me and i love him",
    },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home items={items} setItems={setItems} />} />
        <Route path="create" element={<Create setItems={setItems} />} />

        <Route
          path="modify/:id_mod"
          element={<Modify items={items} setAuth={setAuth} />}
        ></Route>
        <Route path="addpost" element={<AddPost setItems={setItems} />} />
        <Route
          path="modifypost/:postid"
          element={
            auth ? (
              <ModifyPost setItems={setItems} items={items} />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <div className="w-[80%] max-sm:w-[95%] mx-auto ">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
