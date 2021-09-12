<h1 align ="center"><img src="src/assets/Buenos_modales/pata1.png" width="40"> Dog Training <img src="src/assets/Buenos_modales/pata1.png" width="40"></h1>
<br>

Final project from the Fullstack Developer Bootcamp at [Geeks Hubs](https://geekshubsacademy.com/) by [Alejandro](https://github.com/2020-JAUG).


<b>Start: 21 July  end: 23 August 2021</b>
#### Coding 👨🏽‍💻
| Hours worked | > 80 Hours  |
| -----------  | -------  |

For its development, I have relied on the good practices offered by <b> GitFlow. </b>

# <h1 align ="center"> Index </h1>

- [What is it? 🧐](#whatisit?)
- [Infrastructure](#infrastructure?)
- [Requirements ⚙️](#requirements)
- [Safety 🔐](#safety)
- [Technologies](#technologies)

# <h1 align ="center"> What is it?  </h1>

The purpose of this design is to create a dog training community.

On this website, you can register and then log in or log out, and share a post.

Once you are registered and have activated your account, you can access the common wall, where all users can post any questions or share information about dog training.

# <h1 align ="center"> Infrastructure </h1>

The front end is hosted and served by AWS Amplify through GitHub. It is a static web hosting with continuous deployment.

AWS Amplify enables the constant rendering of this application.

<h1 align ="center"> Home  </h1>
<img src="src/assets/Readme/Captura de pantalla 2021-09-13 a las 1.01.39.png" width="1000">
<h1 align ="center"> Common Wall  </h1>
<img src="src/assets/Readme/Captura de pantalla 2021-09-13 a las 1.21.57.png" width="1000">

<br/><br/>
<h4 align ="center"> Example of create a post</h4>


```JavaScript
export function createPostAction(body) {
  return async (dispatch) => {
    dispatch(addPost());
    await axios
      .post("https://jaug-dog-training.herokuapp.com/post", body, {
        headers: { authorization: "Bearer " },
      })
      .then((res) => {
        dispatch(addPostSucce(body));
        //Alert
        Swal.fire("Correct", "The post was added successfully.", "success");
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(addPostError(true));
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
};
```

<h1 align ="center"> Requirements ⚙️</h1>

- The first step is to clone the repository and install the project dependencies.
```
    $ npm install
```
- make sure you have downloaded, <b>Node, Axios and express</b>. [Download](https://nodejs.org/es/)  and install <b>Node.</b>
```
    $ npm install node
```
- Install <b>Axios.</b>
```
    $ npm install axios
```
- Install <b>Express.</b>
```
    $ npm install express.
```

# <p align ="center"> Safety 🔐</p>

For the security part use <b>jsonwebtoken</b> and <b>bcrypt</b>. If you want to have it installed on your machine.
<br>
- Install <b>jsonwebtoken</b>
````
    $ npm install jsonwebtoken
````
- Install <b>bcrypt</b>

````
    $ npm install bcrypt
`````


# <p align ="center">Technologies 💻</p>

 <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://nodejs.org" target="_blank"> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="40"/> </a> <img src="/src/assets/Buenos_modales/axios.png" alt="axios" width="" height="40"/></a> <img src="/src/assets/Buenos_modales/express.png" alt="axios" width="40" height="40"/></a>
