function findCaliforniaCafes(searchingIem) {
    
    const cafes = [
        { "name": "Ashley's Cafe", "place_id": "12hydbdf76sljfts87sbfis" },
        { "name": "Avenue Bakery Cafe", "place_id": "jahgde7wgdiau8ewsahgosd" },
        { "name": "Avenue Cafe", "place_id": "skjd86svvfdrsv55svbvf3f" },
        { "name": "Bazaar Cafe", "place_id": "kjk234g4gcvfx8usg1l33pi" },
        { "name": "California Chicken Cafe", "place_id": "12hydbdf76sljfts87sbfis" },
        { "name": "Hi-Lo Cafe", "place_id": "mjdhgetr4pojfyts22fzfsh" },
        { "name": "Philz Coffee", "place_id": "urhw3837ehalod7w02b7835" }
    ];

    const places = [
        { "id": "12hydbdf76sljfts87sbfis", "street_no": "1B", "locality": "Macarthur Blvd", "postal_code": "20619", "lat": "38.1781 N", "long": "118.4171 W" },
        { "id": "jahgde7wgdiau8ewsahgosd", "street_no": "60H", "locality": "Solomos Island Road", "postal_code": "20688", "lat": "36.7783 N", "long": "119.4179 W" },
        { "id": "kjk234g4gcvfx8usg1l33pi", "street_no": "45250", "locality": "Worth Avenue, Unit A", "postal_code": "20619", "lat": "36.1152", "long": "117.521" },
        { "id": "saswe3s6yydtdr52hsd72yst", "street_no": "1X", "locality": "Macarthur Blvd", "postal_code": "20687", "lat": "36.7783", "long": "119.4179" },
        { "id": "skjd86svvfdrsv55svbvf3f", "street_no": "7S", "locality": "Three Notch Road", "postal_code": "20619", "lat": "36.83", "long": "119.6" },
        { "id": "mjdhgetr4pojfyts22fzfsh", "street_no": "22803", "locality": "Gunston Dr Lexington Park", "postal_code": "20688", "lat": "35.7788", "long": "119.979" },
        { "id": "urhw3837ehalod7w02b7835", "street_no": "225", "locality": "Macarthur Blvd", "postal_code": "20687", "lat": "35.77813", "long": "119.41791" }
    ];

   
    const filteredCafes = cafes.filter(Itercafe => Itercafe.name.toLowerCase().includes(searchingIem.toLowerCase()));

    // console.log(filteredCafes);
   
    const results = filteredCafes.map((cafe) => {
        const place = places.find((place) => {
            	return  place.id === cafe.place_id
         });
        return { ...cafe, ...place };
    });

    return results;
 }


const results = findCaliforniaCafes('Avenue');
console.log(results);


// filteredCafes.map((cafe) => { ... }): This line starts with filteredCafes.map(...), which means we're iterating over each cafe in the filteredCafes array using the map method. For each cafe, we execute the function inside the parentheses.
// const place = places.find((place) => { ... });: Inside the map function, we declare a constant place. We use the find method on the places array to find the place object that matches the condition specified in the arrow function (place) => { ... }.
// return place.id === cafe.place_id;: This line compares the id property of each place object with the place_id property of the current cafe object. If they match, the find method returns that place object.
// return { ...cafe, ...place };: Finally, inside the map function, we return an object that contains the properties of both the cafe and the place. We use the spread operator (...) to merge the properties of cafe and place into a single object.
