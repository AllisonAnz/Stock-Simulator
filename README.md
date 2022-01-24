# README

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AllisonAnz/stock-tracker">
    <img src="https://www.kindpng.com/picc/m/78-788160_transparent-stock-market-icon-png-png-download.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">FullStack Stock Market Simulator</h3>

  <p align="center">
    
   <br />
    <a href="https://github.com/AllisonAnz/stock-tracker#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/AllisonAnz/stock-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/AllisonAnz/stock-tracker/issues">Request Feature</a>
    ·
    <a href="https://github.com/AllisonAnz/stock-tracker/pulls">Send a Pull Request</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project
 <p align="center">
<img src="https://media.giphy.com/media/7EX33f6oVyuPSMrSOV/giphy.gif" width="120" height="120" />
</p>


There are so many great stock simulators out there, however, I didn't find one that really suited my needs so I created one! I wanted to create a simulator that I could learn about stock investing, without risking real money. 

Highlights:
* Search stock by their stock symbol, create an account to be able to save stocks to a customized watchlist
* See daily statistics, price changes and charts
* Learn how to manage your simulated investments by buying and selling stock

You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With
 Frameworks used while building this project. 
* [Bootstrap](https://getbootstrap.com)
* [Rails](https://rubyonrails.org/)
* [React](https://reactjs.org/)


<!-- GETTING STARTED -->
## Getting Started

``` 
1. git clone https://github.com/AllisonAnz/stock-tracker.git
```

## Prerequisites

This project uses two APIs to requests
1. Create an IEX Cloud account and get a free API key [IEX Cloud](https://iexcloud.io/)
2. Get a free API key for [AlphaAvantage](https://www.alphavantage.co/)
3. Create a .env variable in the projects main directory 
4. Enter API keys in `.env`
```JS

API_KEY= `IEXCloud_API_KEY`

ALPHA_API_KEY= `ALPHA_API_KEY`
```

## Installation
* Rails
```sh
    bundle install 
```
* React
```sh
    npm install --prefix client
```

* Backend Server 
```sh
    rails s
```
Runs server as http://localhost:3000/

* Frontend Interface
```sh
    npm start --prefix client
```
Runs the application in development mode.
Open http://localhost:4000 to view it in browser


<!-- USAGE EXAMPLES -->
## Usage

This project can be used as a stock enthusist, or someone that wants to create their own trading simulator. 


<!-- ROADMAP -->
## 🚧 Roadmap

See the [open issues](https://github.com/AllisonAnz/stock-tracker/issues) for a list of proposed features (and known issues).


<!-- LICENSE -->
## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## 📫 Contact

Allison Anzalone - [LinkedIn](https://www.linkedin.com/in/allison-anzalone/) AllisonAnzalone@gmail.com

Project Link: [https://github.com/AllisonAnz/stock-tracker](https://github.com/AllisonAnz/stock-tracker)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Flatiron](https://flatironschool.com/welcome-to-flatiron-school/)
* [GitHub Pages](https://pages.github.com)
* [stock_quote by Ty Rauber](https://rubygems.org/gems/stock_quote/versions/3.0.0)
* [Plotly](https://plotly.com/javascript/react/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/roshanlam/ReadMeTemplate?style=for-the-badge
[forks-url]: https://github.com/AllisonAnz/stock-tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/roshanlam/ReadMeTemplate?style=for-the-badge
[stars-url]: https://github.com/AllisonAnz/stock-tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/roshanlam/ReadMeTemplate?style=for-the-badge
[issues-url]: https://github.com/AllisonAnz/stock-tracker/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/allison-anzalone/
