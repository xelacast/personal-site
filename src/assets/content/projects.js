import comingSoon from "../images/see-you-soon-stock-min.jpg";
import nft from "../images/nft-site.JPG";

export const projects = [
  {
    title: "Ethereuem NFT",
    description: "The website has full access to connecting ETH accounts and purchasing NFT's. The smart contract is linked to the website and can be viewed at the Gtihub Repository below. It is live on the Ropsten Test Net.",
    image: nft,
    technologies: ["React", "Solidity", "Ethereuem", "Hardhat", "Blockchain", "Infura"],
    github: "https://github.com/alexjohn7516/nft-website",
    url: "https://alexjohn7516.github.io/nft-demo/",
    type: "left"
  },
  {
    title: "Pomodora Timer Extension Coming Soon",
    description: "Pomodora timer technique is a great way to keep me focused. I didn't want to buy anyones services so I decided to create my own. A work In Progress.",
    image: comingSoon,
    technologies: ["Chrome", "Firefox", "JavaScript"],
    github: "https://github.com/alexjohn7516/personal-site",
    url: "",
    type: "right"
  },
  {
    title: "Reddit API Heatmap and Statistics",
    description: "I was curious about reddit's user and subreddit data, so I created an <span>interactable dashboard</span>. This represents the best time to post on any given subreddit and the statistics of your Reddit profile. A work In Progress.",
    image: comingSoon,
    technologies: ["Tailwind CSS","React", "Reddit API", "JavaScript", "Heroku"],
    github: "https://github.com/alexjohn7516/personal-site",
    url: "",
    type: "left"
  }
]