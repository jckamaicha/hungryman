import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function CustomRouter() {
  return (
      <Routes>
        {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
        </Route> */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="test" element={<div>This is test</div>}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
  );
}
