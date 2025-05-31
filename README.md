# Grainger Clone

A high-fidelity replica of the Grainger website built with modern front-end technologies. This project is created for educational purposes to demonstrate best practices in web development.

## Features

- Responsive design that works on all devices
- Modern tech stack (React, Next.js, TypeScript, Tailwind CSS)
- Product search with autocomplete
- Shopping cart functionality
- Dynamic pages for products and categories
- SEO-friendly metadata
- Accessible UI components

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand for state management
- Heroicons for icons
- Framer Motion for animations
- Headless UI for UI components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/grainger-clone.git
   cd grainger-clone
   ```

2. Run the initialization script:
   ```bash
   npm run init
   # or
   yarn init
   ```

This script will:
- Create all necessary directories
- Install dependencies
- Set up placeholder images
- Generate mock data for products and categories
- Create a `.env.local` file

3. Verify the project setup:
   ```bash
   npm run check-health
   # or
   yarn check-health
   ```

This script will:
- Check Node.js version
- Verify project structure
- Check required files
- Validate dependencies
- Ensure environment setup

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
grainger-clone/
├── app/                    # Next.js app directory
│   ├── cart/              # Cart page
│   ├── category/          # Category pages
│   ├── product/           # Product pages
│   ├── search/            # Search results page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   └── layout/           # Layout components
├── data/                 # Mock data
│   ├── categories.ts     # Category data
│   └── products.ts       # Product data
├── lib/                  # Utility functions
├── public/              # Static assets
│   └── images/         # Image assets
├── scripts/             # Utility scripts
│   ├── check-health.js  # Project health check
│   ├── cleanup.js       # Project cleanup
│   ├── generate-mock-data.js # Mock data generation
│   ├── generate-changelog.js # Changelog generation
│   ├── init.js          # Project initialization
│   ├── setup-images.js  # Image setup
│   └── update-deps.js   # Dependency updates
├── store/              # Zustand stores
└── types/              # TypeScript types
```

## Mock Data

The project includes mock data for development and testing purposes. The data is generated automatically during initialization and includes:

- Categories: Electrical, Plumbing, Tools
- Products: Various items across different categories with realistic attributes

To regenerate the mock data at any time:
```bash
npm run generate-mock-data
# or
yarn generate-mock-data
```

## Project Health Check

The project includes a health check script that verifies the project setup and dependencies. Run it anytime to ensure everything is working correctly:

```bash
npm run check-health
# or
yarn check-health
```

The health check verifies:
- Node.js version
- Project structure
- Required files
- Dependencies
- Environment setup

## Project Cleanup

If you encounter any issues or want to start fresh, you can use the cleanup script:

```bash
npm run cleanup
# or
yarn cleanup
```

This script will:
- Remove build artifacts
- Clean npm cache
- Remove generated files
- Remove environment files

After cleanup, you can reinitialize the project:
```bash
npm install
npm run init
npm run check-health
```

## Dependency Updates

To keep your project dependencies up to date, use the update script:

```bash
npm run update-deps
# or
yarn update-deps
```

This script will:
- Check for updates to all dependencies
- Update package.json with the latest versions
- Show you what was updated

After updating dependencies:
```bash
npm install
npm run check-health
```

## Changelog Generation

The project includes a script to generate a changelog from git commits:

```bash
npm run generate-changelog
# or
yarn generate-changelog
```

This script will:
- Read git commit history
- Group commits by date
- Generate a CHANGELOG.md file
- Include commit hashes and messages

The changelog is useful for:
- Tracking project changes
- Documenting new features
- Recording bug fixes
- Maintaining version history

## Features to Implement

- [ ] User authentication
- [ ] Checkout process
- [ ] Order history
- [ ] Product reviews
- [ ] Wishlist functionality
- [ ] Advanced filtering and sorting
- [ ] Real API integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project is created for educational purposes only
- All product data is placeholder data
- Design inspired by [Grainger](https://www.grainger.com)
