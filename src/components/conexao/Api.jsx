import React, { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'
import './Api.css'


const publickey = '5c2c036b8e4e1cc3b24397ca6faba391'
const privatekey = '1c93eea48d143c3d5967c0e11a1baf6bf63eeb7f'

const time = Number(new Date())

const hash = md5(time + privatekey + publickey)


const Api = () => {
    
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publickey}&hash=${hash}`)
        .then(dados => setHeros(dados.data.data.results))
    }, [])

    console.log(heros)

    return(
        <div>
            {heros.map(hero => {
                return(
                    <div className="card" key={hero.id}>
                        <div className="card-part-1">
                            <h3>{hero.name}</h3>
                            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero img"/>
                        </div>
                        <div className='card-part-2'>
                            <ul>
                            {hero.series.items.length > 0 && (<li>{hero.series.items[0].name}</li>)}
                            {hero.series.items.length > 1 && (<li>{hero.series.items[1].name}</li>)}
                            {hero.series.items.length > 2 && (<li>{hero.series.items[2].name}</li>)}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Api;