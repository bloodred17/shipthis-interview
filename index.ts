// Import stylesheets
import './style.css';
import { data } from './data';

/*
  Given:
  Array of objects.
  const data = [
    {
      first_name: 'Tova',
      last_name: 'Greasley',
      email: 'tgreasley0@pinterest.com',
      country: 'Philippines',
      wallet: '0xd5d1828c7ed48237a39ce96a2c85fe23db40231d',
    }
  ]

  Group the data collection according to the 'county' field.
  
  The output should be in the following format:
  {
    russia: [
      {
        first_name: "",
        last_name: "",
        email: "",
        wallet: ""
      }
    ]
  }
  
  Reference: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
*/

const res = data;
// Your code here

console.log(res);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
