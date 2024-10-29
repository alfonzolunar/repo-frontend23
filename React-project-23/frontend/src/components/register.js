import photo_reg from '../images/register.png'

function Register(){
    return(
        <div>
            <img className='img-reg' src={photo_reg} />             
            <form>
                <label> Id </label> <input></input> <br/> <br/>
                <label> Name </label> <input /> <br/> <br/>
                <label> Lastname </label> <input></input> <br/> <br/>
                <label> Birthday </label> <input></input> <br/> <br/>
                <button className='btn-reg-cons'> Register </button>
            </form>
        </div>
    )
}

export default Register