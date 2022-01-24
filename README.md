# README

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AllisonAnz/stock-tracker">
    <img src="https://img1.pnghut.com/14/23/13/r3h9C65nwv/diagram-graph-of-a-function-chart-symmetry-average.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Stock Market Simulator</h3>

  <p align="center">
    A Read Me template for your projects!
    <br />
    <a href="https://github.com/roshanlam/ReadMeTemplate/"><strong>Explore the docs »</strong></a>
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

<img src="https://media.giphy.com/media/7EX33f6oVyuPSMrSOV/giphy.gif" width="40" height="40" />


There are so many great stock simulators out there, however, I didn't find one that really suited my needs so I created one! I wanted to create a simulator that I could learn about stock investing, without risking real money. 

Highlights:
* Search stock by their stock symbol, create an account to be able to save stocks to a customized watchlist
* See daily statistics, price changes and charts
* Learn how to manage your simulated investments by buying and selling stock

You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Bootstrap](https://getbootstrap.com)
* [Rails](https://rubyonrails.org/)
* [React](https://reactjs.org/)


<!-- GETTING STARTED -->
## Getting Started

``` 
1. git clone https://github.com/AllisonAnz/stock-tracker.git
```

## Prerequisites

This project uses two APIs to request data
1. Create an IEX Cloud account and get a free API key [IEX Cloud](https://iexcloud.io/)
2. Get a free API key for [AlphaAvantage](https://www.alphavantage.co/)
3. Create a .env variable in the main directory 
4. Enter your API keys in `.env`
```JS
const API_KEY = 'ENTER YOUR API';
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
Runs the Rails server as http://localhost:3000/

* Frontend Server 
```sh
    npm start --prefix client
```
Runs the application in development mode.
Open http://localhost:4000 to view it in browser


<!-- USAGE EXAMPLES -->
## Usage

This project can be used as a stock enthusist, or someone that wants to see how to create their own stock simulator. 


<!-- ROADMAP -->
## 🚧 Roadmap

See the [open issues](https://github.com/AllisonAnz/stock-tracker/issues) for a list of proposed features (and known issues).


<!-- LICENSE -->
## 📝 License
Describe your License for your project. 

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## 📫 Contact

Allison Anzalone - AllisonAnzalone@gmail.com

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