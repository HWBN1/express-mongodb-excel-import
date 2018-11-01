# express-mongodb-excel-import
Import data from excel to mongodb using express.js

## install

```
git clone https://github.com/HWBN1/express-mongodb-excel-import.git
cd express-mongodb-excel-import
npm install
npm start
```


## Usage

initiate the excel file attributes

```
const filePath = 'users.xlsx';			// File path 	
const sheet = 'Sheet1';					// Sheet name
const requiredColumn = 'A';				// A Column which always has data
const maximumRowNumber = 1000000;		// Maximum numbers of rows
```

create new object with excel data 

```
const XLSX = require('xlsx');
const file = XLSX.readFile(filePath);
const range = file.Sheets[sheet];

const Users = require('./collections/Users');
 
const userIns = new Users({
      excelId: range[`A2`].w,
	  nameAr: range[`B2`].w,
      name: range[`C2`].w
    });
    userIns.save();
```
