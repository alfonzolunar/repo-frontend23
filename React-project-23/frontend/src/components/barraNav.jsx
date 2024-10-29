
function BarraNav(){
    function home_view() {
        window.location = "/"
    }
    function view_register(){
        window.location= "/register_page"
    }
    function view_consult(){
        window.location = "/consult_page"
    }

    let view_contact = () => {
        window.location = "/contact_page"
    }
    
    return(        
        <nav className="block-items">
            <ul>
                <li className="item"> <button onClick={home_view} className="btn-barra"> Home </button> </li>
                <li className="item"> <button onClick={view_register} className="btn-barra"> Register </button> </li>
                <li className="item"> <button onClick={view_consult} className="btn-barra"> Consult </button> </li>
                <li className="item"> <button onClick={view_contact} className="btn-barra"> Contact </button> </li>
            </ul>
        </nav>        
    )
}

export default BarraNav