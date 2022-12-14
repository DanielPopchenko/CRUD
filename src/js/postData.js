const postData = () => {
    const options = {
        method: 'POST',
        body: JSON.stringify({
            name: 'Daniil',
            number: '11-11-11',
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch('http://localhost:3000/users', options)
        .then(res => res.json())
        .then(data => data);
};

export default postData;