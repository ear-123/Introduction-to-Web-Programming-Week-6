const querryJSON = {"query": [    {        "code": "Vuosi",        "selection": {            "filter": "item",            "values": [                "2000",                "2001",                "2002",                "2003",                "2004",                "2005",                "2006",                "2007",                "2008",                "2009",                "2010",                "2011",                "2012",                "2013",                "2014",                "2015",                "2016",                "2017",                "2018",                "2019",                "2020",                "2021"            ]        }
},
{        "code": "Alue",        "selection": {            "filter": "item",            "values": [                "SSS"            ]        }
},
{        "code": "Tiedot",        "selection": {            "filter": "item",            "values": [                "vaesto"            ]        }
}
],
"response": {    "format": "json-stat2"}
}

async function getData() {
    const url = "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"
    const response = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(querryJSON)
    })

    const data = await response.json()

    //console.log(data)
    //console.log(data.value.toString())
    const formatedData = {
        labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
            {
                name: "data", type: "line",
                values: data.value
            }
        ]
    }

    const chart = new frappe.Chart("#chart", {  // or a DOM element,
                                                // new Chart() in case of ES6 module with above usage
        title: "My Awesome Chart",
        data: formatedData,
        type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: 450,
        colors: ['#eb5146']
    })
}

getData()