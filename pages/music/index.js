import React, { useState } from 'react'
import MusicWrap from './MusicWrap'
import { BiSearch } from 'react-icons/bi';

const Music = () => {
    const[searchStern, setSearchstern] = useState('');

    const ashulachi = [
        {
            img: "https://www.onfirecafe.net/wp-content/uploads/2017/10/music-2191768_1920.jpg",
            audio: "music1.flac",
            humans: "Ashulachi nomi 0"
        },
        {
            img: "https://i.ytimg.com/vi/ADaarsb8Z3U/maxresdefault.jpg",
            audio: "music2.mp3",
            humans: "Ashulachi nomi 1"
        },
        {
            img: "https://w-dog.ru/wallpapers/0/28/399165242412540/muzyka-noty-naushniki.jpg",
            audio: "music1.flac",
            humans: "Ashulachi nomi 2"
        },
        {
            img: "https://images7.alphacoders.com/291/291202.jpg",
            audio: "music3.mp3",
            humans: "Ashulachi nomi 3"
        },
        {
            img: "https://avatars.mds.yandex.net/get-zen_doc/235144/pub_5bdaf2b344fea400aaec0a3f_5bdb1dbee3d93900a9873cbc/scale_1200",
            audio: "music4.mp3",
            humans: "Ashulachi nomi 4"
        },
        {
            img: "https://i.ytimg.com/vi/4MZ10r3GGIc/maxresdefault.jpg",
            audio: "music5.mp3",
            humans: "Ashulachi nomi 5"
        },
        
    ]
    return (
        <MusicWrap>
            <div className='container pt-3'>
                <div className='chiziqlar'>
                    <div className='chiziq'></div>
                    <div><h3>Music</h3></div>
                    <div className='chiziq'></div>
                </div>
                <div className='search_input_div'>
                    <input type="text" placeholder='search music' className='music_input'   onChange={event=>{setSearchstern(event.target.value)}}/>
                    <BiSearch className='search_icons'/>
                </div>
                    <div className="row">
                        {
                            ashulachi.filter((val)=>{
                            if(searchStern == ""){
                                    return val
                            }else if(val.humans.toLowerCase().includes(searchStern.toLowerCase())){
                                return val
                            }
                            }).map((v, key)=>{
                                return(
                                    <div className="col-sm-12 col-lg-4" key={key}>
                                        <div className="card">
                                            <div className="rams">
                                                <img src={v.img} alt="" />
                                                <div className='download'>
                                                    <button className='btn'><a href={v.img} download>Rasmni yuklash</a></button>
                                                </div>
                                            </div>
                                            <div className='ashulachi'>
                                                <h3 className='m-2'>{v.humans}</h3>
                                                <audio src={v.audio} controls></audio>
                                                <button className='btn'><a href={v.audio} download>Qo'shiqni yuklash</a></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </MusicWrap>
    )
}

export default Music
