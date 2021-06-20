# LinkBytes

LinkBytes is a link shortener API. You can use it directly with Postman or from a frontend app.

### Packages Used
- restify
- restify-cors-middleware
- restify-errors
- restify-plugins
- dotenv
- mongoose
- nanoid
- 

## Installation
you will need to make a .env based on the ".env-template" file.
```bash
API_NAME    = <give it a name>
PORT        = <port to listen on>
VERSION     = <set your version>
DB_URL      = <mongodb URI>
```
```bash
npm install
npm run start
```
---
## Usage
The core api currently routes 2 endpoints:

`/bytes/<your-long-url>`
> This endpoint is for generating the short url code. It returns only the code needed.

`/<short-url-code>`

> This endpoint is for redirecting to the original URL based on the give code.
---
An Example:

https://localhost:3001/bytes/www.somereallylongurlthatneedstobesupershort.com

- returns a url code of "f32R_Ut"
- you can then redirect with "https://localhost:3001/f32R_Ut"

---
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.