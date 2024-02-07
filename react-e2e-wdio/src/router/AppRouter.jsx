import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { Users } from "../pages/users/UsersPage";
import { UserDetailsPage } from "../pages/UserDetailsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HelloWorld } from "../pages/HelloWorld";
import { UsersForTest } from "../pages/users-test/UsersForTest";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="users-test" element={<UsersForTest />} />
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
