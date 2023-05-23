import { PropTypes } from 'prop-types';

function Card({children,reverse}) {
     // reverse class direct apply ho jayegi hume conditionaly apply krni h
     // return <div className="card reverse">{children}</div>; 

     // conditional on class per apply krne ka example
     // step 1. template string ka use krege
     // step 2. prop jo var h use ${} m likhege or sath m condition likhege ki konse
     // condition per konsa action hona h
     // {``} m reverse k true hone per reverse class apply hogi ye likha h
     // return <div className={`card ${reverse && 'reverse'} `}>{children}</div>;
     
     // conditional on style per apply krna ka example
     // return (
     //   <div
     //     className="card"
     //     style={{
     //       backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
     //       color: reverse ? "#fff" : "rgba(0,0,0,0.4)",
     //     }}
     //   >
     //     {children}
     //   </div>
     // );

     return <div className="card">{children}</div>; 
}

Card.defaultProps = {
     reverse : false
}

Card.propTypes = {
     children : PropTypes.node.isRequired ,
     reverse : PropTypes.bool,
}

export default Card