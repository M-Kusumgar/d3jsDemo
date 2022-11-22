import '../App.css';
import useWorldAtlas from '../Hooks/useWorldAtlas';
import MapMarks from '../IndividualComps/MapMarks';
import useData from '../Hooks/useData';
import { max, interpolateYlOrRd, scaleSequentialSqrt } from 'd3';
import useCountryCodes from '../Hooks/useCountryCodes';

const ChildrenHIVData = ({ selectedYear }) => {

    const width=960
    const height=500

    const map = useWorldAtlas()
    const data = useData()
    const countryCodes = useCountryCodes()

    if (!map || !data || !countryCodes) {
        return <pre>Loading...</pre>
    }

    const alphaToNumeric = new Map()
    countryCodes.forEach(code => {
        const alpha3Code = code["alpha-3"]
        const numericCode = code["country-code"]
        alphaToNumeric.set(alpha3Code, numericCode)
    })

    const filteredData = data.filter(d => d.Year === selectedYear)

    const rowByNumericCode = new Map()
    filteredData.forEach(d => {
        const alpha3Code = d.Code
        const numericCode = alphaToNumeric.get(alpha3Code)
        rowByNumericCode.set(numericCode, d)
    })

    const colorValue = d => d.aids

    const colorScale = scaleSequentialSqrt(interpolateYlOrRd)
        .domain([0,max(filteredData, colorValue)])

    return (
        <svg width={width} height={height}>
            <MapMarks map={map}
            rowByNumericCode={rowByNumericCode}
            colorScale={colorScale}
            colorValue={colorValue}
            />
        </svg>
    );
}

export default ChildrenHIVData;
