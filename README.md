# Second Brain Frontend

The Second Brain app is a responsive web application designed to help you collect, organize, and share your favorite YouTube videos and Twitter content. Built with modern web technologies, it offers a seamless experience across all screen sizes.

## Features

### Responsive Design
- Works on all screen sizes, from mobile to desktop.

### Content Collection
- Add and store YouTube and Twitter content in your personal brainspace.

### Share Brain
- Share your curated brainspace with others.

### User Authentication
- Sign up and sign in to access your personalized brainspace.

### Content Filtering
- View content categorized by type (YouTube, Twitter, or all).

## Key Components

### `Brainspace.tsx`
- Handles the main content view.
- Displays content based on the selected category (YouTube, Twitter, or all).
- Provides modals for adding new content and sharing the brainspace.

### `Button.tsx`
- A reusable button component with support for icons and customizable styles.

### `Card.tsx`
- Displays individual content items (YouTube videos or Twitter embeds).
- Includes actions like sharing and deleting content.

### `CreateContentModal.tsx`
- Modal for adding new content to the brainspace.

### `ShareWindow.tsx`
- Modal for sharing the brainspace.

### `Sidebar.tsx`
- Navigation sidebar to filter content by type.

### `Auth.tsx`
- Handles user sign-up and sign-in functionality.

### `Dashboard.tsx`
- Main layout component combining the sidebar and the brainspace.

## Installation

### Clone the Repository
```bash
git clone https://github.com/your-repo/second-brain.git
```

### Install Dependencies
```bash
cd second-brain/frontend
npm install
```

### Run the Application
```bash
npm run dev
```

### Open in Browser
Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

### Sign Up or Sign In
Create an account or log in to access your brainspace.

### Add Content
Use the "Add Content" button to store YouTube or Twitter links in your brainspace.

### View Content
Browse through your content categorized by YouTube, Twitter, or all.

### Share Brain
Click "Share Brain" to generate a shareable link to your brainspace.

### Delete Content
Remove unwanted items from your brainspace.

## Technologies

- **React**: Frontend framework
- **TypeScript**: Strongly typed development
- **Axios**: API communication
- **Tailwind CSS**: Styling framework
- **Vite**: Fast build tool for development

