## Set Up Project

In **root directory**

```bash
npx create-react-app client
```

### Install Dependencies

In **/client directory**

```bash
  npm i react-icons axios uuid --save
  npm i -g json-server
  npm i concurrently
```

### Add Bootstrap CDN to `index.html`

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

### Add to `package.json`

```json
"scripts": {
  "server": "json-server --watch db.json --port 3001",
  "dev": "concurrently \"npm run server\" \"npm start\""
},
```

---

### Run Locally

| Location | Command                                    | Runs         | URL                          | Access |
| :------- | :----------------------------------------- | :----------- | :--------------------------- | :----- |
| /client  |  `npm start`                               | **Frontend** | *http::/localhost/3000*      | Site   |
| /client  |  `json-server --watch db.json --port 3001` | **Server**   | *http::/localhost/3001/jobs* | Data   |
| /client  |  `npm run dev`                             | **Both**     | *http::/localhost/3000*      | Both   |
