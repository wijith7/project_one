export function PostData(userData) {
    //let BaseURL = 'https://10.100.8.18:8243/token';

    return new Promise((resolve, reject) =>{


        fetch('https://10.100.8.18:8243/token',{
            method: 'POST',
            data:'grant_type=password&username=Username&password=Password',
            headers:'Authorization: Basic SVAwTlFLUmxOZ1Nna1g4Vk96MzgzbDlBNUI0YTpTSFRSZk1FbnA5YWp4VjB6c0VZTzRFdEtmRmth',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((responseJson) => {
            resolve(responseJson);
          })
          .catch((error) => {
            reject(error);
          });


      });
}
