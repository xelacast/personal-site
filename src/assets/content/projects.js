import nft from "../images/nft-site.JPG";
import reddit from '../images/redditprojectvisual.JPG';
import portfolio from '../images/pwv.JPG'
export const projects = [
  {
    title: "Ethereuem NFT",
    description: "The website has full access to connecting ETH accounts and purchasing <span>NFT's</span>. The smart contract is linked to the website and can be viewed at the Gtihub Repository below.",
    image: nft,
    technologies: ["React", "Solidity", "Ethereuem", "Hardhat", "Blockchain", "Infura"],
    github: "https://github.com/alexjohn7516/nft-website",
    url: "https://alexjohn7516.github.io/nft-demo/",
    type: "left"
  },
  {
    title: "Reddit Subreddits and Users",
    description: "I was curious about Reddit's API and wanted to learn Next.js and REST API data fetching, so I created an <span>interactable dashboard</span>. You can search any subreddit or user and receive relevant data to the subreddit or user.",
    image: reddit,
    technologies: ["Next.js","SCSS", "Reddit API", "TypeScript", "Figma UI/UX"],
    github: "https://github.com/alexjohn7516/reddit-api",
    url: "",
    type: "right"
  },
  {
    title: "Portfolio Website",
    description: "Every developer... every person needs a <span>portfolio website</span>. I set out on a mission to develop one with React, and CSS modules. It was my first instance of a portfolio site and it wont be my last. The portfolio is open source anyone can use this repository for themself. Design Credits go to <a href='brittanychiang.com' target='_blank'>Brittany Chang.</a>",
    image: portfolio,
    technologies: ["Tailwind CSS","React", "Reddit API", "JavaScript", "Heroku"],
    github: "https://github.com/alexjohn7516/personal-site",
    url: "",
    type: "left"
  },
]