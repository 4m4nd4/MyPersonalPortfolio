import './loader.css'
import aLoader from '../../assets/ALoader.gif'



const Loader = () => {

    function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut(){
        setInterval(loader, 2000);
    }

    window.onload = fadeOut;

    return(
            <div className='loader-container'>
                <img src={aLoader} alt="" />
                
                
                <div className='loaderBar-container'>
                    <div className='loaderBar'></div>
                </div>

            </div>
        
    )
}

export default Loader