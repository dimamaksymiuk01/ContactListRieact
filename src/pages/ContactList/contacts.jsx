import './Contactlist.css';
import avatar from './imagine/avatar.jpg';


function Contacts() {
    return (
        <>
        <div className='person'>

            <div className='avatar'>
            <img className='imgAvatar' src={avatar} alt="My Image" />
            </div>

            <div className='otherInfo'>

                <div className='infoS'>
                <span>Name Namovich</span>
                <span>380971234567</span>
                </div>

                <div className='infoS'>
                <span>Email@gmail.com</span>
                <span>Gender</span>
                </div>


            </div>

            <div className='status'>
            <span>Status</span>
            </div>

        </div>

        <div className='person'>

            <div className='avatar'>
            <img className='imgAvatar' src={avatar} alt="My Image" />
            </div>

            <div className='otherInfo'>

                <div className='infoS'>
                <span>Name Namovich</span>
                <span>380971234567</span>
                </div>

                <div className='infoS'>
                <span>Email@gmail.com</span>
                <span>Gender</span>
                </div>


            </div>

            <div className='status'>
            <span>Status</span>
            </div>

        </div>

        <div className='person'>

            <div className='avatar'>
            <img className='imgAvatar' src={avatar} alt="My Image" />
            </div>

            <div className='otherInfo'>

                <div className='infoS'>
                <span>Name Namovich</span>
                <span>380971234567</span>
                </div>

                <div className='infoS'>
                <span>Email@gmail.com</span>
                <span>Gender</span>
                </div>


            </div>

            <div className='status'>
            <span>Status</span>
            </div>

        </div>

        </>


    )
  }

  export default Contacts;