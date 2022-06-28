// const sendHttpRequest = (method, url, data) => {
//     return fetch(url, {
//         method: method, //either POST or GET
//         body: JSON.stringify(data), //turns back the data to readable stream
//         headers: data?{'content-type': 'application/json'} : {}//checks if 'data' is not empthy
//         }
//     )
//     .then(rees => {
//         return rees;
//     // })
//     // .then(resp => {
//     //     console.log(resp)
//     })
//     .then(resp => {
//         if (resp.status >= 400) {
//             return resp.json().then(errResData => {
//                 const error = new Error('Something Went Wrong');
//                 error.data = errResData;
//                 throw error;
//             });
//         }
//        return resp.json();
//     });
//  }

// const getIt = () => {
//     sendHttpRequest('POST', 'https://reqres.in/api/register', {
//         "email": "eve.holt@reqres.in",
//         // "password": "pistol"
//     })
//     // .then(respn => {
//     //     console.log(respn);
//     // })
//     // .catch(error => {
//     //     console.log(error);
//     // })
// }

// getIt();

//------------------------------------------------------

const myFormData = document.getElementById('myForm');

myFormData.addEventListener('submit', e => {
    e.preventDefault()

    const myPayload = new FormData(myFormData)
    console.log(myPayload)

    fetch('http://httpbin.org/post', {
    method: 'POST',
    body: myPayload,
    })
    .then(response => response.json())
    .then(response1 => console.log(response1))
    .catch(err => console.error(err));
})

