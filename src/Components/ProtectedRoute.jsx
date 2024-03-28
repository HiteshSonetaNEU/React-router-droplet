import React from 'react';

const ProtectedRoute = ({ isAuthenticated,children }) => {
    console.log(isAuthenticated,' ==isauthenticated')
    return isAuthenticated ? children :<>Please login to view this page</>
}

export default ProtectedRoute;