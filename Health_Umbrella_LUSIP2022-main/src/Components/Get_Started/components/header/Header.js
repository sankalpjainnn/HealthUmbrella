import "./Header.css";
import head from "./head.png";
function Header(props) {
    return (
      <>
      <div className="fullBox row">
      <div className="content container-fluid col-7">
        <h1>{props.heading}</h1>
        <p>
            {props.para}
        </p>
      </div>
      <div className="image col">
        <img src={props.photo} class="img-fluid" alt="photo" />
      </div>
      </div>
      </>
    );
  }
  
  export default Header;
  