import styled from "styled-components";


const MusicWrap = styled.div`
    min-height: 100vh;
    transition: 5s;

    .card{
        width: 350px;
        padding: 10px;
        margin-top: 20px;
      
        .rams{
            height: 200px;

            &:hover .download{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
       
        audio{
            outline: none;
        }
        .ashulachi{
            height: 100%;
            padding: 10px;
            background-color: blueviolet;
            color: white;
            a{
                text-decoration: none !important;
            }
        }
    }
    .chiziqlar{
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
            margin: 0 10px 0 10px;
        }
        .chiziq{
            width: 100%;
            height: 5px;
            background-color: blueviolet;
            border-radius: 10px;
        }
    }
    .download{
        /* width: 100%;
        height: 100%; */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /* bottom: 0; */
        background-color: rgba(137, 43, 226, 0.508);
        display: none;
        transition: 3s;
        a{
            text-decoration: none;
        }
    }
   
    
    .search_input_div{
        height: 50px;
        .music_input{
            padding: 10px;
            outline: none;
            width: 300px;
            margin-top: 10px;
        }
        .search_icons{
            font-size: 25px;
            position: absolute;
            left: 380px;
            margin-top: 20px;
        }
    }
    @media (max-width: 700px){
        .card{
            width: 100%;
            .ashulachi{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }
        }
        .search_input_div{
            width: 100%;
            .music_input{
                width: 100% !important;
            }
            .search_icons{
               display: none;
            }
        }
    }
`;

export default MusicWrap;