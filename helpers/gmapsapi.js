const apiKey = process.env.GMAPS_API_KEY;

const getCity = async (long, lat) => {
    try {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        return data.results[0].address_components[4].long_name; 
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getCity };