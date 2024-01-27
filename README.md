# Project Title

This is a Discord bot project that uses the [Discord.js-selfbot-v13](https://www.npmjs.com/package/discord.js-selfbot-v13), [cleverbot-free](https://www.npmjs.com/package/cleverbot-free), and a custom server module.

## Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repo-name.git
```
Then, navigate to the project directory and install the dependencies:

```bash
cd your-repo-name
npm install
```

## Usage

```javascript
const keepAlive = require("./server")
const cleverbot = require("cleverbot-free");
const Discord = require('discord.js-selfbot-v13');

const client = new Discord.Client({
  checkUpdate: false, patchVoice: true,
});

// Add your code here
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
