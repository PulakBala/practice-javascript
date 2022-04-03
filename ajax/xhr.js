 const url = 'https://jsonplaceholder.typicode.com/users';

  const xhr =new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.responseType = 'json';

  xhr.onload = () => {
      if(xhr.status >= 400) {
        console.log('Failed');
      } else {
          console.log(xhr.response)
      }
      
  }

  xhr.onerror = () => {
      console.log('Error!!!');
  }

  xhr.send();
