const apiKey = 'EMk-QNiwlPPmfNcLMHoPAwtOZB6SyB8CpALPuSY51xQ2bza4H7R69quM_ezCxm0FRqtLkdPTnKaHiVtd4QZ9K-bfBv-WoqYPDILhf-ZiEp0NvvHFw06s93WocOYKYnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            console.log(term);
            console.log(location);
            console.log(sortBy);
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id:business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};
 export default Yelp;
