import Image from 'next/image'
import FirstImg from '../public/emile-perron.jpg'
import ProfileImg from "../public/profile-img.jpg"
import ReactIcon from '../public/React-icon.png'
import Next from '../public/next.svg'
import Redux from '../public/redux.svg'
import Nodejs from '../public/nodejs.png'
import Link from 'next/link'
import Facebook from '../public/icons/facebook.svg'
import Twitter from '../public/icons/twitter.svg'
import Github from '../public/icons/github.svg'
import Linledin from '../public/icons/linkedin.svg'
import Instagram from '../public/icons/instagram.svg'

export default function Home() {
  return (
    <main>
      <div>
        <Image 
          src={FirstImg}
          alt='first-img'
          width={0}
          height={0}
          style={{ width : '100%', height : '500px', position : 'absolute'}}
        />
        <Image 
          src={ProfileImg}
          alt='profile-picture'
          width={200}
          height={200}
          style={{position : "relative", borderRadius : '50%',
                  top : "400px", left : '100px'}}
        />
      </div>
      <div  className='flex'
            style={{position : "absolute", top : '620px', left : '70px'}}>
          <div className='flex flex-col items-center'>
              <h2
              style={{fontSize : '30px', fontWeight: 'bolder'}}
              >Olusoga Adebayo</h2>
              <h4
              style={{fontSize : '15px', fontWeight: 'bold'}}
              >MERN Stack Developer</h4>
              <p
              style={{fontSize : '15px', fontWeight: 'light'}}
              >olusoageadebayo495@gmail.com</p>
          </div>
          <div className='flex justify-evenly'
                style={{width : '900px'}}
                >     
            <div> 
              <div  style={{padding: '40px'}}>
                <Image 
                  src={ReactIcon}
                  alt='react-icon'
                  width={60}
                />
                <h2>Reactjs</h2>
              </div>
              <div
                style={{padding: '40px'}}
              >
                <Image 
                  src={Redux}
                  alt='react-icon'
                  width={60}
                />
                <h2>Redux</h2>
              </div>
            </div>
            <div>
              <div  style={{padding: '40px'}}>
                <Image 
                  src={Next}
                  alt='react-icon'
                  width={60}
                />
                <h2>Nextjs</h2>
              </div>
              <div  style={{padding: '40px'}}>
                <Image 
                  src={Nodejs}
                  alt='react-icon'
                  width={60}
                />
                <h2>Nodejs</h2>
              </div>
            </div>
          </div>
      </div>
      <footer
       className='flex justify-center items-center'
       style={{backgroundColor : 'black', height : '60px',position : "relative", top : '750px'}}
       >
        <Link href='https://web.facebook.com/olusoga.adebayo/'>
          <Image 
            src={Facebook}
            alt='facebook'
            style={{margin : '10px'}}
          />
        </Link>
        <Link href='https://www.linkedin.com/in/olusoga-adebayo-295b7720a/'>
          <Image 
            src={Linledin}
            alt='linkedin'
            style={{margin : '10px'}}
          />
        </Link>
        <Link href='https://twitter.com/olu_sogzy'>
          <Image 
            src={Twitter}
            alt='twitter'
            style={{margin : '10px'}}
          />
        </Link>
        <Link href='https://github.com/olusogzy'>
          <Image 
            src={Instagram}
            alt='Instagram'
            style={{margin : '10px'}}
          />
        </Link>
        <Link href='https://github.com/olusogzy'>
          <Image 
            src={Github}
            alt='github'
            style={{margin : '10px'}}
          />
        </Link>
      </footer>
      
    </main>
    
  )
}
