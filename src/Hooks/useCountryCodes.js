import { csv } from "d3"
import { useEffect, useState } from "react"

const csvURL = "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-3/slim-3.csv"

const useCountryCodes = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvURL).then(setData)
    },[])

    return data
}

export default useCountryCodes