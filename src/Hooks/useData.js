import { csv } from "d3"
import { useEffect, useState } from "react"

const csvURL = "https://gist.githubusercontent.com/M-Kusumgar/481d129a7cdfe2f881d3fc270223b906/raw/e0758b3c3688a946e05e70ea3fe1667be0a75047/children-living-with-hiv.csv"

const row = d => {
    if (d.Code && d.Code !== "OWID_WRL") {
        d.aids = +d['Children (0-14) living with HIV']
    } else {
        d.aids = 0
    }
    return d
}

const useData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvURL, row).then(setData)
    },[])

    return data
}

export default useData