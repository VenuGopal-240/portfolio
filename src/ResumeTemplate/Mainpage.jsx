import React from "react";
import TemplateOne from "./Template/TemplateOne";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Resume from "./Template/Resume";
import Skills from "./Template/Skills";
import Project from "./Template/Projects";

const Layout = () => (
    <Header>
        <Outlet />
    </Header>
);
const MainPage = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route index element={<Navigate to="/details" />} />
                    <Route path="/details" element={<Layout />}>
                        <Route index element={<Navigate to="/details/homepage" />} />
                        <Route path='/details/homepage' element={<TemplateOne />} />
                         <Route path='/details/resume' element={<Resume />} />
                         <Route path='/details/skills' element={<Skills />} />
                         <Route path='/details/project' element={<Project />} />
                        {/* <Route path='/details/education' element={<Education />} />
                        <Route path='/details/skills' element={<Skills />} />
                        <Route path='/details/project' element={<Project />} /> */}
                       
                    </Route>
                </Routes>
            </HashRouter>
            {/* <Footer /> */}

            {/* <Header />
            <TemplateOne />
            <Footer /> */}
        </>
    )
}
export default MainPage;