import { Component } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const withRouter = (Component) => {
    function ComponentsWithRouterProps(props) {
        const navigate = useNavigate()
        const location = useLocation()
        const params = useParams()

        return(
            <Component 
                {...props}
                navigate={navigate}
                location={location}
                params={params}
            />
        )
    }
    return ComponentsWithRouterProps
}

export default withRouter