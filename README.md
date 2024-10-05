# TeamSync

<img width="1272" alt="TeamSync" src="https://github.com/user-attachments/assets/3aaea253-8cb6-4364-a405-11760c27ad23">

A Slack-inspired team communication and collaboration platform built with Next.js and Node.js, featuring real-time messaging, channels, direct messages, file sharing, and a responsive design to enhance team productivity and connectivity.

## Demo

Check out the live application: [TeamSync](https://teamsync.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Features

- **Real-time Messaging**: Communicate instantly with team members through real-time chat.
- **Channels**: Organize conversations into dedicated channels for different projects, teams, or topics.
- **Direct Messages**: Send private messages to individual team members for one-on-one conversations.
- **User Authentication**: Secure user registration and login processes powered by Clerk.dev, ensuring that your communications are protected and accessible only to authorized users.
- **Responsive Design**: Optimized for both desktop and mobile devices, providing a consistent and user-friendly experience across all platforms.
- **Search Functionality**: Quickly find messages, files, and channels using the advanced search feature.
- **Emoji and Reactions**: Enhance conversations with emojis and reactions to messages.
- **Integration with Convex**: Leverage Convex for backend services, enabling efficient data synchronization, serverless functions, and scalable infrastructure to support TeamSync's features.

## Technologies Used

- **Front-end**:
  - Next.js
  - React
  - Tailwind CSS
  - TypeScript
- **Back-end**:
  - Node.js
  - Convex
- **Deployment**:
  - Vercel

## Installation

To run the project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Convex CLI**: Install globally using `npm install -g convex-cli` or use `npx` for running Convex commands without global installation.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sherard-dalaguit/TeamSync.git
   cd TeamSync

2. **Install dependencies**:

   ```bash
   npm install

  This command installs all the necessary dependencies listed in the `package.json` file, including:
  
  - **Next.js**: A React framework for building server-side rendered and statically generated applications.
  - **React**: A JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for styling.
  - **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
  - **Convex**: Backend platform for serverless functions and real-time data synchronization.
  - **@emoji-mart/react**: A React component for displaying and selecting emojis.
  - **Other dependencies as listed in the `package.json` file.**

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:
   ```env
    # Deployment used by 'npm convex dev'
    CONVEX_DEPLOYMENT=your_convex_key
    NEXT_PUBLIC_CONVEX_URL=url_for_accessing_convex_services

4. **Initialize Convex**:
   ```bash
   npx convex dev

5. **Run the development server**:
   ```bash
   npm run dev

6. **Access the application**:

   Open http://localhost:3000 in your browser


## Usage

- **Real-time Messaging**: Communicate instantly with team members through real-time chat, ensuring seamless and efficient conversations.
- **Channels**: Organize your discussions into dedicated channels for different projects, teams, or topics. Create public channels for open discussions or private channels for confidential conversations.
- **Direct Messages**: Send private messages to individual team members for one-on-one conversations, facilitating direct and focused communication.
- **User Authentication**: Securely sign up and log in using Clerk.dev integration. Your communications are protected and accessible only to authorized users, ensuring privacy and security.
- **Responsive Design**: Access TeamSync from any device. The responsive design ensures a seamless and user-friendly experience on both desktop and mobile platforms.
- **Search Functionality**: Quickly locate messages, files, and channels using the advanced search feature. Filter results by keywords, users, or dates to find exactly what you need.
- **Emoji and Reactions**: Enhance your conversations with emojis and reactions. Express yourself and engage with your team more effectively through a wide range of emojis.
- **Integration with Convex**: Leverage Convex for backend services, enabling efficient data synchronization, serverless functions, and scalable infrastructure to support TeamSync's features.
- **Threaded Conversations**: Keep your discussions organized by replying to specific messages in threads. This helps maintain clarity and context within busy channels.
- **Message Editing and Deletion**: Edit or delete your messages as needed to correct mistakes or update information. Maintain the accuracy and relevance of your communications.


## Contact

**Sherard Dalaguit**  
[Email](mailto:sherard.softwaredev@gmail.com) | [LinkedIn](https://www.linkedin.com/in/sherard-d)
