import React, { Profiler } from 'react'

const ProfileImage =({titulo,imagem, alt}) => {
    return(
        <div className='card'>
            <h2 className='titulo'>
                {titulo}
            </h2>

            <img src={imagem} alt={alt} className='imagem'></img>

        </div>
    )

}
export default ProfileImage