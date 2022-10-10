import React from 'react'
import {useParams} from 'react-router-dom'

const withRouter = (Component) => {
    return (props) => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <Component
        {...props}
        params={params}
        // etc...
      />
    );
    }
  };
export default withRouter;