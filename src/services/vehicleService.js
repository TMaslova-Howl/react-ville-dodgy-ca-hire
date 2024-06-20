const BASE_URL = 'https://swapi.dev/api/starships';

const fetchVehicles = async (searchTerm) => {
    try {
        const queryString = searchTerm ? `/?search=${searchTerm}` : '';
        const res = await fetch(BASE_URL + queryString);
        var jsonResponse = await res.json();
        return jsonResponse
            .results
            .filter((starShip) => starShip.cost_in_credits && starShip.cost_in_credits != 'unknown');
    } catch (error) {
        console.log(error);
        throw new Error("Could not find any srar ships", error);
    }
};


export {
    fetchVehicles
};