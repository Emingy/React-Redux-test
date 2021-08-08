import axios from "axios";

export const getProducts = () => new Promise( resolve => {
    let url = `https://datainlife.ru/junior_task/get_products.php`

    axios.get(encodeURI(url))
            .catch(()=>{
                throw new Error('Ошибка!')
            })
            .then(res=>res.data)
            .then(data=>{
                resolve(data);
            });
});

// window.onload = () => {console.log(getProducts())};