import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isopen, toggle , arabic }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ opacity: isopen ? "100%" : "0", top: isopen ? "0" : "-100%" }}
      onClick={toggle}
      className="SidebarContainer "
    >
      <div className="Icon" onClick={toggle}>
        <FaTimes className="CloseIcon " />
      </div>
      <div className="SidebarWrapper">
        <ul className="SidebarMenu ">
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/", { replace: true });
            }}
            className="SidebarBtnWrap "
          >
            <a href="/" className="SidebarLink" onClick={toggle}>
              {arabic ? "اسم اللجنة" : "Committee Name"}

            </a>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/countdown", { replace: true });
            }}
            className="SidebarBtnWrap "
          >
            <a href="/countdown" className="SidebarLink" onClick={toggle}>
             
              {arabic ? "قائمة المتحدثين العامة" : " General Speakers List"}

            </a>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/present", { replace: true });
            }}
            className="SidebarBtnWrap "
          >
            <a href="/present" className="SidebarLink" onClick={toggle}>
         
              {arabic ? "التفقد" : "Delegations Present"}

            </a>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/singlespeaker", { replace: true });
            }}
            className="SidebarBtnWrap "
          >
            <a href="/singlespeaker" className="SidebarLink" onClick={toggle}>
             
              {arabic ? "الكلمات الافتتاحية" : " Single Speaker"}

            </a>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/moderated", { replace: true });
            }}
            className="SidebarBtnWrap "
          >
            <a href="/moderated" className="SidebarLink" onClick={toggle}>
            
              {arabic ? "جلسة محكمة" : "  Moderated Caucus"}

            </a>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate("/unmoderated", { replace: true });
            }}
            className="SidebarBtnWrap "
          >
            <a href="/unmoderated" className="SidebarLink" onClick={toggle}>
            
              {arabic ? "جلسة غير محكمة" : "Unmoderated Caucus"}

            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
