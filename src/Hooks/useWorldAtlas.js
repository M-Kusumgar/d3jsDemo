import { useState, useEffect } from 'react'
import { json } from 'd3'
import { feature, mesh } from 'topojson-client'

const worldAtlasURL = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const useWorldAtlas = () => {

    const [map, setMap] = useState(null);

    useEffect(() => {
        json(worldAtlasURL).then(map => {

            const { countries, land } = map.objects
            setMap({
                countries: feature(map, countries),
                interiors: mesh(map, countries, (a,b) => a !== b)
            })
        })        
    }, []);

    return map

}

export default useWorldAtlas