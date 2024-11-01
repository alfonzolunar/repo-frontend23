import photo_consult from '../images/consult.png'

function Consult() {
    return(
        <div>
            <img className='img-consult' src={photo_consult} /> <br/> 
            <label> Id </label> <input /> <br/> <br/>
            <textarea /> <br/> <br/>
            <button className='btn-reg-cons'> Consult </button>
        </div>
    )
}

export default Consult