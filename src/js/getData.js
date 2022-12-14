const getData = () => {
    return fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => data);
};

export default getData;