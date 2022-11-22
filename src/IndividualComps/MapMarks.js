import { geoNaturalEarth1, geoPath, geoGraticule } from "d3"
import { feature } from "topojson-client"

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()
const missingDataColor = "grey"

const MapMarks = ({ 
    map: { countries, interiors },
    rowByNumericCode,
    colorScale,
    colorValue
}) => {
    return (
        <g className="marks">

            {/* sphere and lat long lines */}
            <path className="sphere" 
            d={path({ type: "Sphere" })} />
            <path className="graticule" d={path(graticule())} />

            {/* countries */}
            {countries.features.map((feature, i) => {

                const d = rowByNumericCode.get(feature.id)

                return <path key={i}
                d={path(feature)}
                fill={d ? colorScale(colorValue(d)) : missingDataColor}
                />
            })}

            {/* interior borders */}
            <path 
            className="interior"
            d={path(interiors)}
            />

        </g>
    )
}

export default MapMarks