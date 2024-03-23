// const form = document.querySelector('form');
// console.log(form);

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // Process form data here
//     const formData = {
//         name: document.getElementById('name').value,
//         phoneNo: document.getElementById('phoneNo').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value
//     };
//     const jsonData = JSON.stringify(formData);
//     console.log(jsonData);
    

//     // Send data to server
//     fetch('http://localhost:3000/api/v1/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
        
//       },
//       body: jsonData
//     })
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//         if(response.status===400){
//             window.alert("User already exists");
//             window.location.href = "index.html";
//         }
//       })

//   });
  