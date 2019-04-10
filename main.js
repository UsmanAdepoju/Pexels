// The data we are going to send in our request
 document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const query = document.querySelector('form input').value.split(' ').filter(val => val).join('+')
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=60`;

    let params = {
        method: 'GET',
        headers: {
            'Authorization': '563492ad6f917000010000010036213f92234cfa9bfcfc9fc2833aca',
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    };

    // let response;

    fetch(url, {
            headers: {
                'Authorization': '563492ad6f917000010000010036213f92234cfa9bfcfc9fc2833aca',
            }
        })
        .then(res => res.json())
        .then(json => {
            // response = json;
            console.log(json.photos.map(res => res.src.tiny))
            render(json.photos.map(res => res.src.tiny))
        })
        .catch(function(e) {
            console.log(e);
        });
    let active = 1;
    document.querySelector('.prev').addEventListener('click', () => {
        active = active - 1 || 3
        document.querySelector('.container div.active').classList.remove('active')
        document.querySelector(`.container div:nth-of-type(${active})`).classList.add('active')
    })

    document.querySelector('.next').addEventListener('click', () => {
        active = active + 1 < 4 ? active + 1 : 1
        document.querySelector('.container div.active').classList.remove('active')
        document.querySelector(`.container div:nth-of-type(${active})`).classList.add('active')
    })

    const render = (images) => {
        images.forEach((url, index) => {
            const div = parseInt(index / 20);
            const image = document.createElement('img')
            image.src = url;
            document.querySelector(`.container div:nth-of-type(${div + 1})`).appendChild(image)
        })
    }
})
