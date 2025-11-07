import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../screens/Feed";
import Post from "../screens/Post";
import Update from "../screens/Update";
import More from "../screens/More";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="/posts" element={<Post />}></Route>
      <Route path="/update/:id" element={<Update />}></Route>
      <Route path="/more/:id" element={<More />}></Route>
    </Routes>
  );
};

export default AppRouter;
