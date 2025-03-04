import React, { lazy } from "react";
export const Navbar = lazy(() => import("../components/Navbar"));
export const Login = lazy(() => import("../pages/Login"));
export const Signup = lazy(() => import("../pages/Signup"));
export const Students = lazy(() => import("../pages/Students"));
export const Teachers = lazy(() => import("../pages/Teachers"));
export const Invitation = lazy(() => import("../pages/Invitation"));
export const Books = lazy(() => import("../pages/Books"));
export const Setting = lazy(() => import("../pages/Setting"));
export const Home = lazy(() => import("../pages/Home"));
export const ProtectedRoute = lazy(() => import("../context/ProtectedRoutes"));
export const Layout = lazy(() => import("../layout/Layout"));
