import React from 'react'
import style from './header.module.css'

const Header = () => {
    return (
        <div className={style.UzMuzDiv_2}>
            <div className={style.bg_color}></div>
            <div className={style.video}>
                <iframe className={style.header_iframe}  src="https://www.youtube.com/embed/39QDt0ov_Q8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <button className='btn btn-primary mt-3'><a className='text-light' href="#" download={'https://youtu.be/kJQP7kiw5Fk'}>Yuklash</a></button>
            </div>
        </div>
    )
}

export default Header;
