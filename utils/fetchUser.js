const url = 'https://randomuser.me/api/?results=20';

const fetchPeople =  async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const person = data.results[0]
        const {phone, email} = person;
        const {large:image} = person.picture;
        const {password} = person.login;
        const {first, last} = person.name;
        const {dob:{age}} = person
        const {street:{number, name}} = person.location
        return {
            phone,
            email, 
            image, 
            password, 
            age, 
            street:`${number} ${name}`,
            name: `${first} ${last}`
        }

    } catch (error) {
        console.log(error);
    }
}

export default fetchPeople;