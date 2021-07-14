import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Kanban } from "views/kanban";
import { Epic } from "views/epic";
export default function Project() {
  return (
    <div>
      <h1>project page</h1>
      {/* /kanban则跳转时会被认为是根路由 */}
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="/kanban" element={<Kanban />}></Route>
        <Route path="/epic" element={<Epic />}></Route>
        {/* 未匹配到上述路由，则跳转到kanban */}
        <Navigate to={window.location.pathname + "/kanban"}></Navigate>
      </Routes>
    </div>
  );
}
