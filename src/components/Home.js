import Loic from '../img/Loic.png';
import html from '../img/html.png';
import javascript from '../img/javascript.png';
import css from '../img/css.png';
const Home = () => {
    return ( 
        <div className="home">
            <div className='introduction'>
                <p>Welcome to my portfolio, I am Hirwa Cardinal Loic a software developer.</p>
                <img src={Loic} alt='Loic'/>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className='images'>
                    <img src={html} alt='html'/>
                    <img src={css} alt='css'/>
                    <img src={javascript} alt='javascript'/>
                </div>

            </div>
        </div>
     );
}
 
export default Home;