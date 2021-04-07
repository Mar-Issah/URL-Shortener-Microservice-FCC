# URL Shortener Microservice
An FreeCodeCamp API Microservice project to demonstrate my skills in Node.js/ Express and MongoDb

## About The Project

This is a Node. js (with Express. js) and MongoDb application which is part of the [FreeCodeCamp](https://www.freecodecamp.org/) Back End Certification.

![URL Shortener Microservice](https://res.cloudinary.com/dytnpjxrd/image/upload/v1617807639/My%20Website%20Projects/url_shortner_tpmsqq.png)

<br>

### Built With / Requirements :construction_worker:
<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />


<br>

<!-- GETTING STARTED -->

## Getting Started
Using it on your local machine
### Prerequisites
You need to have Node, yarn and npm installed on your machine. To check if they are installed, open up a terminal window and type the following:
 ```sh
npm -v
yarn -v
node -v
   ```
   
If these commands print out a version number in the terminal, you are good to go. If not, you need to go ahead and install what is missing. For the purpose of this project, I used [Node](https://nodejs.org/en/)

### Installation

1. Clone the repo on your local machine
   ```sh
   git clone https://github.com/Mar-Issah/URL-Shortener-Microservice-FCC.git
   ```
2. Change directory into the new folder and type the following, this installs the required dependencies
    ```sh
    npm install
   ```
3. To run the React project.
   ```sh
   npm start
   ```

<br>

<!-- USAGE EXAMPLES -->

## Usage
[Click here](https://marsiya-fcc-url.glitch.me) to view live demo on [Glitch](https://glitch.com/)

1. The API endpoint is:
  ```sh
   POST https://marsiya-fcc-url.glitch.me/api/shorturl/new
   ```
2. When the user passes a URL in the form input the user get back the original and  a shortened URL in the JSON response.

3. If the user passes an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

4. When I visit that shortened URL, it will redirect me to my original link.


## Example
1. Request:
  ```sh
    https://marsiya-fcc-url.glitch.me/api/shorturl/new
  ```
2. Response:
  ```sh
   {"original_url":"https://www.google.com/","short_url":94}
  ```
 
3. When the user enters below:
 ```sh
   https://marsiya-fcc-url.glitch.me/94
  ```
4. The user will be redirected to:
   ```sh
   https://www.google.com/
  ```

<br>
<!-- CONTRIBUTING -->

## Contributing :family:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/awesomeFeature`)
3. Commit your Changes (`git commit -m 'Added some awesome features'`)
4. Push to the Branch (`git push origin feature/awesomeFeature`)
5. Open a Pull Request
   <br>

<!-- LICENSE -->

## License :page_facing_up:

Distributed under the `MIT License`. See [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

<!-- CONTACT -->

<br>

## Contact :e-mail:

Marsiya Issah - masy370@gmail.com

Project Link: [https://github.com/Mar-Issah/URL-Shortener-Microservice-FCC.git](https://github.com/Mar-Issah/URL-Shortener-Microservice-FCC.git)

Kindly check out more of my projects in [CodePen](https://codepen.io/your-work/)

## More info on [URL Shortener Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice) on FreeCodeCamp
