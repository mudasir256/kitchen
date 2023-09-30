import {Link} from 'react-router-dom'
const Button = (props) => {
const {children} = props
    return(
      <>
        
       <Link className="button" to={props.routePath}>{children}</Link>
      
      </>
        );
};

export default Button;