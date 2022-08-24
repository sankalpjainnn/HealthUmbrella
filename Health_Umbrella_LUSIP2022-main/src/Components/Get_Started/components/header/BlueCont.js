import "./BlueCont.css";
function BlueCont(props) {
    return (
      <>
      <div className="Box row">
      <div className="imagee col">
        <img src={props.photo} class="img-fluid" alt="photoo" />
      </div>
      <div className="contentt container-fluid col-7">
        <h1>{props.heading}</h1>
        <p>
            {props.para}
        </p>
      </div>
      </div>
      </>
    );
  }
  
  export default BlueCont;