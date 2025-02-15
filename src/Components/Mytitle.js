import './mytitle.css'; // Regular CSS import

function Mytitle(props) {   // Default value for myclr
    return (
        <div className="container">

      <h1 className={`text-${props.myclr} text-center`} style={{ fontSize: "3rem" }}>
        Sara Hamdy Ahmed
      </h1>
            <h2 className="subtitle">Front End Developer and Mobile application</h2>
        </div>
    );
}
export default Mytitle;