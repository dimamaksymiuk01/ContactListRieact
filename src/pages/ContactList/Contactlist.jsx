import './Contactlist.css';
import myImage1 from './imagine/icon1.png';
import myImage2 from './imagine/icon2.png';
import myImage4 from './imagine/icon3.png';
import myImage3 from './imagine/icon4.png';
import star from './imagine/star.png';
import contacts from './imagine/contacts.png';
import Contacts from './contacts';





function Contactlist() {
    return (
            <div className='block'>

                <div className='left'>
                    <div className='gretys'>
                        <span>Favorite categories</span>
                        <img src={star} alt="My Image" />
                    </div>
                    <div className='categories'>
                        <div className='categoriesInfo'>
                            <img src={myImage1} alt="My Image" />
                            <span>Work</span>
                        </div>

                        <div><span>1</span></div>
                    </div>
                    <div className='categories'>
                    <div className='categoriesInfo'>
                        <img src={myImage2} alt="My Image" />
                        <span>Family</span>
                    </div>
                    <div><span>3</span></div>
                    </div>
                    <div className='categories'>
                    <div className='categoriesInfo'>
                        <img src={myImage3} alt="My Image" />
                        <span>Friends</span>
                        </div>
                        <div><span>8</span></div>

                    </div>
                    <div className='categories'>
                    <div className='categoriesInfo'>
                    <img src={myImage4} alt="My Image" />
                        <span>Private</span>
                    </div>
                    <div><span>0</span></div>
                    </div>
                </div>



                <div className='right'>

                    <div className='gretys'>
                        <img src={contacts} alt="My Image" />
                        <span>Your contacts</span>
                    </div>

                    <Contacts/>

                </div>
            </div>
        )
      }
      
  
  export default Contactlist;