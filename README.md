
# Beauty Onchain (BEON ∞)

![Beauty Onchain Logo](https://beonn.xyz/assets/logo.png) <!-- Replace with your logo URL -->

**Beauty Onchain** is a Web2 friendly platform  with blockchain-powered features, designed to fight counterfeiting in the beauty industry and provide a trusted e-commerce store for verified beauty products. Our mission is to ensure product authenticity and seamless shopping experiences.

- **Web2-First Approach**: Users (brands, consumers) interact with familiar interfaces (email/password, fiat payments) without needing Web3 knowledge.
- **Web3 Perks**: Optional blockchain authentication, crypto payments (5% discount), and NFT receipts to incentivize adoption.
- **Target Audience**: Beauty brands (Nigeria/Africa, $20B market), mid-sized pharma ($200B counterfeit market), and consumers seeking trust.

This repository (`BEON-DAPP`) contains the codebase for the **authentication service** and **e-commerce store**, built with React, Node.js, PostgreSQL, and Polygon blockchain.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Authentication Service](#authentication-service)
  - [E-Commerce Store](#e-commerce-store)
- [Policies](#policies)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Features

### Authentication Service
- **Blockchain-Powered Verification**: Brands generate Unique Product Identifiers (UPIs) stored on the Polygon blockchain, linked to QR codes for easy consumer verification.
- **Web2-Friendly**: No blockchain knowledge needed; consumers scan QR codes with any smartphone, and brands use a simple dashboard.
- **Benefits**:
  - Brands: Protect revenue and reputation from counterfeiting ($5B annual loss in beauty).
  - Consumers: Verify product authenticity instantly.

### E-Commerce Store
- **Verified Products**: Shop beauty products linked to blockchain-verified UPIs.
- **Payment Options**: Pay with fiat (Stripe) or crypto (MetaMask/MoonPay) for a 5% discount.
- **Web3 Perks**: Optional NFT receipts as proof of authenticity and $GLOW token airdrops for early adopters.
- **Benefits**:
  - Brands: Reach conscious consumers via a trusted marketplace.
  - Consumers: Shop with confidence using familiar payment methods.

---

## Tech Stack
- **Frontend**: React.js (web), Flutter (mobile, planned).
- **Backend**: Node.js with Express.js.
- **Database**: PostgreSQL for product data.
- **Blockchain**: Polygon (Mumbai Testnet) for UPIs and crypto payments.
- **Web3 Tools**: Ethers.js for blockchain interactions.
- **Payments**: Stripe (fiat), MetaMask/MoonPay (crypto, optional).
- **QR Code**: QRCode.js for generating verification codes.
- **Hosting**: Vercel/AWS for scalability.
- **Security**: AES-256 encryption, HTTPS, smart contract audits.

---

## Getting Started

### Prerequisites
- **Node.js** (v16+): Install from [nodejs.org](https://nodejs.org).
- **PostgreSQL**: Install locally or use a cloud provider (e.g., Supabase).
- **VS Code**: Recommended code editor.
- **Git**: For cloning the repo.
- **Polygon Mumbai Testnet**: Get test tokens from [faucet.polygon.technology](https://faucet.polygon.technology).
- **Stripe Account**: For fiat payments (setup at [stripe.com](https://stripe.com)).
- **MetaMask**: Optional for crypto payment testing.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/BEON-DAPP.git
   cd BEON-DAPP
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   ```

4. **Blockchain Setup**:
   ```bash
   cd contracts
   npm install
   ```

### Configuration
1. **Environment Variables**:
   - Create `backend/.env`:
     ```env
     DATABASE_URL=postgresql://user:password@localhost:5432/beon
     POLYGON_PRIVATE_KEY=your_metamask_private_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
   - Replace `your_metamask_private_key` and `your_stripe_secret_key` with your credentials.

2. **Database Setup**:
   - Create a PostgreSQL database named `beon`.
   - Run the following SQL to create the `products` table:
     ```sql
     CREATE TABLE products (
       id SERIAL PRIMARY KEY,
       brand VARCHAR(100),
       name VARCHAR(100),
       UPI VARCHAR(64),
       price DECIMAL,
       verified BOOLEAN
     );
     ```

3. **Smart Contract**:
   - Deploy the `ProductAuth` contract to Polygon Mumbai:
     ```bash
     cd contracts
     npx hardhat run scripts/deploy.js --network mumbai
     ```
   - Update `backend/index.js` with the contract address and ABI.

### Running the Project
1. **Backend**:
   ```bash
   cd backend
   node index.js
   ```
   - Access at `http://localhost:3000`.

2. **Frontend**:
   ```bash
   cd frontend
   npm start
   ```
   - Access at `http://localhost:3000`.

3. **Test**:
   - Register a product via POST to `http://localhost:3000/register-product`.
   - Verify a product by scanning the QR code or visiting `http://localhost:3000/verify-product/:UPI`.
   - Browse the e-commerce store at `http://localhost:3000/store`.

---

## Project Structure
```
BEON-DAPP/
├── backend/                # Node.js backend (Express.js)
│   ├── index.js            # Main server file
│   ├── .env                # Environment variables
│   └── package.json
├── frontend/               # React.js frontend
│   ├── src/
│   │   ├── VerifyProduct.js # Authentication UI
│   │   ├── Store.js        # E-commerce UI
│   │   └── App.js
│   └── package.json
├── contracts/              # Solidity smart contracts
│   ├── ProductAuth.sol     # Authentication contract
│   ├── scripts/
│   │   └── deploy.js
│   └── package.json
├── README.md               # This file
└── docs/                   # Link to GitBook documentation
```

---

## Usage

### Authentication Service
- **For Brands**:
  - Register via email/password on `https://beonn.xyz`.
  - Input product details (brand, serial) to generate a UPI and QR code.
  - Example API call:
    ```bash
    curl -X POST http://localhost:3000/register-product -d '{"brand":"TestBrand","serial":"12345"}' -H "Content-Type: application/json"
    ```
    - Returns UPI and QR code URL.
- **For Consumers**:
  - Scan QR code with any smartphone to verify authenticity.
  - Visit `https://beonn.xyz/verify?upi=YOUR_UPI` to check product details.

### E-Commerce Store
- **For Brands**:
  - List verified products via the dashboard.
  - Example API call:
    ```bash
    curl -X POST http://localhost:3000/list-product -d '{"brand":"TestBrand","name":"Lipstick","UPI":"YOUR_UPI","price":20}' -H "Content-Type: application/json"
    ```
- **For Consumers**:
  - Browse verified products at `https://beonn.xyz/store`.
  - Pay with fiat (Stripe) or crypto (MetaMask) for a 5% discount.
  - Optional: Receive NFT receipts for purchases.

---

## Policies
To ensure trust and compliance, Beauty Onchain follows these policies:
- **Privacy Policy**: Protects user data (name, email, payment details) with AES-256 encryption and NDPR compliance.
- **Terms of Service**: Governs platform use, requiring accurate brand data and lawful consumer behavior.
- **Refund Policy**: Offers refunds for defective products (fiat: within 7 days via Stripe; crypto: store credit).
- **Blockchain and Crypto Policy**: Explains Polygon-based UPIs and optional crypto payments/NFT receipts.

View full policies at [https://beonn.xyz/policies](https://beonn.xyz/policies) or download [beon-policies.pdf](https://beonn.xyz/policies/beon-policies.pdf).

---

## Roadmap
- **Q1 2025**: Launch socials (X, Telegram), deploy smart contracts, build MVP landing page.
- **Q2 2025**: E-commerce MVP with fiat payments, onboard 10-20 brands.
- **Q3-Q4 2025**: Polish features, scale to 50 brands, 5,000 users.
- **Q1-Q2 2026**: Full launch, 100 brands, 10,000 users.
- **Q3-Q4 2026**: Achieve $300K revenue, pitch for $3M acquisition.

---

## Contributing
We welcome contributions to Beauty Onchain! To contribute:
1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to GitHub: `git push origin feature/your-feature`.
5. Open a pull request.

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) and review the [GitBook documentation](https://gitbook.com/your-gitbook-link) for project details.

---

## Contact
- **Email**: support@beonn.xyz
- **Phone**: +234-XXX-XXX-XXXX
- **X/Twitter**: @BeautyOnchain
- **GitBook**: [Beauty Onchain Documentation](https://gitbook.com/your-gitbook-link)

For issues or feature requests, open a GitHub issue or contact us directly.

---

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---
```

---

### Key Features of the README
- **Public Scope**: Focuses on **authentication** and **e-commerce**, excluding the booking platform to protect your idea, as requested.
- **Web2-Web3 Balance**: Emphasizes Web2-friendly interfaces (email/password, fiat payments) with optional Web3 perks (crypto discounts, NFT receipts).
- **Professional Tone**: Clear and concise, suitable for developers, contributors, and potential buyers reviewing the repo for your $3M acquisition goal.
- **Actionable Setup**: Includes step-by-step instructions for cloning, installing, and running the project, aligned with the public VibeCoding plan from the previous response.
- **Policies**: References the Privacy, Terms, Refund, and Blockchain policies from earlier, with links to your website and PDF.
- **Confidentiality**: Omits the booking platform, ensuring your team and public contributors only see authentication and e-commerce features.
- **GitBook Link**: Encourages team members to refer to the public GitBook for detailed documentation.

---

### Instructions for Using the README
1. **Create the README File**:
   - In your GitHub repository (`BEON-DAPP`), create a file named `README.md` in the root directory.
   - Copy and paste the above Markdown content into `README.md`.
   - Commit and push:
     ```bash
     git add README.md
     git commit -m "Add README for Beauty Onchain"
     git push origin main
     ```

2. **Customize Placeholders**:
   - Replace `https://github.com/your-username/BEON-DAPP.git` with your actual repo URL.
   - Update `https://beonn.xyz/assets/logo.png` with your logo’s URL (or remove if no logo yet).
   - Replace `https://gitbook.com/your-gitbook-link` with your actual GitBook URL after creating the public GitBook.
   - Update `YOUR_CONTRACT_ADDRESS` and `YOUR_ABI` in the VibeCoding setup with your deployed smart contract details.
   - Add your actual phone number and X/Twitter handle in the “Contact” section.

3. **Add Supporting Files**:
   - Create a `LICENSE` file with the MIT License text (available online or via GitHub’s license template).
   - Optionally, create a `CODE_OF_CONDUCT.md` file using GitHub’s template to encourage professional contributions.
   - Upload the `beon-policies.pdf` to your website (e.g., `https://beonn.xyz/policies/beon-policies.pdf`) and ensure the link works.

4. **Share with Team**:
   - Share the repo link (`https://github.com/your-username/BEON-DAPP`) with your team.
   - Direct them to the README for setup instructions and the GitBook (once created) for detailed documentation.
   - Keep the booking platform code in a private branch (`booking-feature`) and develop it separately, as outlined in the private VibeCoding plan.

5. **Protecting the Booking Platform**:
   - The README excludes all references to the booking platform, ensuring your idea remains confidential.
   - Store the private booking platform code and documentation (from the previous response) in the `booking-feature` branch or a private GitBook/Google Doc.

---

### Enhancing the README
To make the README even more engaging without adding complexity:
- **Add a Banner**: Create a banner image with your logo and tagline (e.g., “Beauty Onchain: Trust in Every Product”) using Canva and place it at the top:
  ```markdown
  ![Beauty Onchain Banner](https://beonn.xyz/assets/banner.png)
  ```
- **Badges**: Add GitHub badges for build status or dependencies:
  ```markdown
  [![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org)
  [![Polygon](https://img.shields.io/badge/Polygon-Mumbai-blue)](https://polygon.technology)
  ```
- **Demo Link**: Once the MVP is live, add a link to a demo page (e.g., `https://beonn.xyz/demo`) in the “Usage” section.
- **Video Placeholder**: If you plan to add a video later (per your previous question), mention it in the “Features” section:
  ```markdown
  **Demo Video**: Coming soon in Q2 2025! See our authentication and e-commerce in action.
  ```

---
