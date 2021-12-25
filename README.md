# countriesAPI


Clone the project through: `git clone https://github.com/IsmaelAlomari/countriesAPI.git`

Install the required packages: `yarn install`

Run the project by: `yarn start`


# Endpoints:

All Countries:

Endpoint: https://localhost:5000/countries

GET

Search By Name(common and official) Or CCA2/CCA3/CCN3:

Endpoint: https://localhost:5000/search

POST

Input Data(body): name or cca2 or cca3 or ccn3


Country currencies by CCA2

Endpoint: https://localhost:5000/countryCurrencies/<CCA2>
  
GET
  
where <CCA2> should be replaced by the wanted country's cca2. (eg. localhost:5000/countryCurrencies/MT)
  

Country group by region
  
Endpoint: https://localhost:5000/group/region/<REGION>
  
GET
  
where <REGION> should be replaced by the wanted country's region. (regions such as Asia , Europe, .....etc.)
  

Country group by region
  
Endpoint: https://localhost:5000/group/language/<LANGAUGE>
  
GET
  
where <LANGAUGE> should be replaced by the wanted country's language. (languages such as Arabic , English, .....etc.)
  


