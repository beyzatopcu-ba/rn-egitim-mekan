const cityConverter = (data) => {
    const cityList = data.location_suggestions.map((location, index) => {
        let city = {
            id: location.id,
            name: location.name,
        };

        return city;
    });

    console.log(cityList);
    return cityList;
};

export default cityConverter;