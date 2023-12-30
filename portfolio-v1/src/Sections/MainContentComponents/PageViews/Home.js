
import './Home.css'
import TabSwitcher from './PageViewComponents/TabSwitcher';

const Home = () => { 

    return (
        <div className="homeParent">
            <div className="headerGrid">
            <h1 className="headerText">Micah Shumaker</h1>
            <h2 className="subHeaderText">Web Developer</h2>
            </div>
            <div className='pageContentGrid'> 

            <TabSwitcher />            
            </div>
            
        </div>

    )
}

export default Home;