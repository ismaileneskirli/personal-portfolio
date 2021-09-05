import "./topbar.scss";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";

export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            .enes
          </a>
          <div className="iconContainer">
            <PersonIcon></PersonIcon>
            <span style={{ marginLeft: 10 }}>İsmail Enes KIRLI</span>
          </div>
          <di className="mailContainer">
            <MailIcon></MailIcon>
            <span style={{ marginLeft: 10 }}>ismaileneskirli@gmail.com</span>
          </di>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line4"></span>
          </div>
        </div>
      </div>
      <span className="line"></span>
    </div>
  );
}
