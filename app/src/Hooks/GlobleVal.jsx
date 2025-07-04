export const GlobleVal = () => {

    const shapes = ['Round', 'Oval', 'Cushion', 'Radiant', 'Marquise', 'Princess', 'Asscher', 'Pear', 'Emerald', 'Heart']
    const labs = ['GIA', 'IGI', 'HRD']
    const shapeList = {
        RBC: "Brylant",
        PRI: "Princess",
        CMB: "Cushion",
        SQE: "Asscher",
        MQ: "Markiza",
        OV: "Owal",
        RAD: "Radiant",
        PS: "Gruszka",
        EMR: "Emerald",
        HS: "Serce"
    }

    const clarityList = ['SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL']

    const colorList = ['J', 'I', 'H', 'G', 'F', 'E', 'D']
    const cutList = ['Fair', 'Good', 'Very Good', 'Excellent']
    const fluorescenceList = ['Strong', 'Medium', 'Faint', 'None']
    const polishList = ['Fair', 'Good', 'Very Good', 'Excellent']
    const symmertyList = ['Fair', 'Good', 'Very Good', 'Excellent'];
    const LableList = {
        CARAT: "CARAT",
        COLOR: "BARWA",
        CLARITY: "CZYSTOŚĆ",
        CUT: "SZLIF",
        PRICE: "CENA",
        SHAPE: "KSZTAŁT"

    }

    // product loader 
    const fake_data = [];
    for (let i = 0; i < 20; i++) {
        fake_data.push(<div key={i} className="mb-2 flex animate-pulse flex-col space-y-3 p-[1px]"><div className="w-[100%] bg-gray-300 h-60 lg:h-80"></div><div className="w-[65%] bg-gray-300 h-4"></div><div className="w-[40%] bg-gray-300 h-4"></div></div>)
    }

    const DefaultImageUrl = 'https://cdn.shopify.com/s/files/1/0901/4532/5401/files'

    return { shapes, labs, shapeList, clarityList, colorList, cutList, LableList, DefaultImageUrl, fluorescenceList, polishList, symmertyList, fake_data }
}
