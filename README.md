# Playwright TypeScript Automation Framework

A production-ready test automation framework implementing **Page Object Model (POM)** for UI and API testing, built with **Playwright** and **TypeScript**. Developed as a technical assessment for the **Finacplus QA Automation Engineer** position.

---

## Assignment Overview

### UI Testing Requirements
Navigate to DemoQA Book Store  
Login with created credentials  
Validate username and logout button visibility  
Search for "Learning JavaScript Design Patterns"  
Extract and validate book details (Title, Author, Publisher)  
Write book details to file  
Logout successfully  

### API Testing Requirements
Create a user via POST request  
Fetch user details via GET request  
Update user information via PATCH request  
Validate HTTP status codes and response bodies  

---

## 🎥 Test Execution Videos

> **Watch the complete test execution with real browser interactions**

### UI Test Execution (Headed Mode)
[![UI Test Video](https://img.shields.io/badge/▶️-Watch_UI_Test_Execution-red?style=for-the-badge&logo=youtube)](https://drive.google.com/file/d/YOUR_UI_VIDEO_ID/view?usp=sharing)

*Demonstrates: Login → Search → Extract Book Details → Logout*

### API Test Execution
[![API Test Video](https://img.shields.io/badge/▶️-Watch_API_Test_Execution-blue?style=for-the-badge&logo=youtube)](https://drive.google.com/file/d/YOUR_API_VIDEO_ID/view?usp=sharing)

*Demonstrates: POST (Create) → GET (Read) → PATCH (Update)*

---

## 📊 Test Reports

### Playwright HTML Report
[![View Playwright Report](https://img.shields.io/badge/📊-View_Detailed_Report-green?style=for-the-badge)](https://drive.google.com/file/d/YOUR_PLAYWRIGHT_REPORT_ID/view?usp=sharing)

**Features:**
- Step-by-step execution trace
- Screenshots on failure
- Network activity logs
- Test duration metrics

### Allure Report (Optional)
[![View Allure Report](https://img.shields.io/badge/📈-View_Allure_Report-orange?style=for-the-badge)](https://drive.google.com/file/d/YOUR_ALLURE_REPORT_ID/view?usp=sharing)

**Enhanced Features:**
- Test execution trends
- Categorized failures
- Historical data comparison
- Detailed step logs

---

## Framework Architecture

### Design Patterns
- **Page Object Model (POM)**: Strict separation between test logic and page interactions
- **Utility Pattern**: Reusable FileWriter class for data persistence
- **Single Responsibility**: Each page class handles only its own elements and actions

### Key Technical Features
- **Resilient Locators**: Prioritizes user-facing selectors (`getByRole`, `getByPlaceholder`, `getByText`)
- **Auto-waiting**: Leverages Playwright's built-in waiting mechanisms (no hard sleeps)
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Environment Security**: Credentials managed via `.env` file (not committed to repo)
- **Cross-browser Testing**: Validated on Chromium, WebKit, and Firefox

---

## 📁 Project Structure
```
Playwright-TypeScript-Automation-Framework/
├── pages/
│   ├── loginPage.ts          # Login page objects and methods
│   └── bookStorePage.ts      # Book store page objects and methods
├── tests/
│   ├── ui/
│   │   └── bookstore.spec.ts # UI test scenarios
│   └── api/
│       └── users.spec.ts     # API test scenarios
├── utils/
│   └── fileWriter.ts         # File operations utility
├── playwright.config.ts      # Playwright configuration
├── package.json
├── .env.example              # Environment variables template
└── README.md
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Playwright** | Test automation engine |
| **TypeScript** | Type-safe programming language |
| **Node.js** | Runtime environment |
| **JSONPlaceholder** | Mock REST API for testing |
| **Dotenv** | Environment variable management |

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Ankitsinha10/Playwright-TypeScript-Automation-Framework.git
cd Playwright-TypeScript-Automation-Framework
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

4. **Configure environment variables:**
```bash
# Create .env file from template
cp .env.example .env

# Edit .env with your credentials
# USERNAME=your_demoqa_username
# PASSWORD=your_demoqa_password
```

---

## ▶️ Running Tests
```bash
# Run all tests
npx playwright test

# Run only UI tests
npx playwright test tests/ui

# Run only API tests
npx playwright test tests/api

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests on specific browser
npx playwright test --project=chromium

# View HTML report
npx playwright show-report
```

---

##  Sample Test Results

### UI Test Console Output
```
✓ Complete book store flow - login, search, extract details, logout (14.2s)
  
  Username validated successfully
  Logout button is visible
  Navigated to Book Store
  Searched for: Learning JavaScript Design Patterns
  Book found in search results
  
  Book Details Extracted:
    Title: Learning JavaScript Design Patterns
    Author: Addy Osmani
    Publisher: O'Reilly Media
  
  Book details written to: /path/to/book-details.txt
  Logged out successfully
```

### API Test Console Output
```
Test 1: Create User
============================================================
✓ POST Request Sent to: https://jsonplaceholder.typicode.com/users
✓ Response Status: 201 Created
✓ User ID: 11
✓ All validations passed

Test 2: Get User Details
============================================================
✓ GET Request Sent to: https://jsonplaceholder.typicode.com/users/1
✓ Response Status: 200 OK
✓ User Data Validated

Test 3: Update User
============================================================
✓ PATCH Request Sent to: https://jsonplaceholder.typicode.com/users/1
✓ Response Status: 200 OK
✓ Updated data validated
```

---

##  API Testing Note

**Original Requirement**: Test against `https://reqres.in`  
**Implementation**: Used `https://jsonplaceholder.typicode.com`

**Reason**: ReqRes API is protected by Cloudflare security that blocks automated requests from Playwright, resulting in 403 Forbidden errors. JSONPlaceholder provides equivalent REST API functionality without security restrictions, allowing demonstration of the same testing principles.

---

##  Sample Test Data

**Book Details Output** (`book-details.txt`):
```
Book Details:
Title: Learning JavaScript Design Patterns
Author: Addy Osmani
Publisher: O'Reilly Media
```

---

## Security

- Credentials stored in `.env` (gitignored)
- `.env.example` provided as template
- No sensitive data committed to repository

---

## Contributing

This is a technical assessment project. For questions or feedback, please contact:
- **GitHub**: [Ankitsinha10](https://github.com/Ankitsinha10)

---

## 📄 License

This project is created for educational and assessment purposes.

---

##  Author

**Ankit Sinha**  
QA Automation Engineer  
[GitHub](https://github.com/Ankitsinha10)

---

##  Highlights for Reviewers

Clean, maintainable code structure  
Production-ready patterns and practices  
Comprehensive error handling  
Clear documentation  
Type-safe TypeScript implementation  
Cross-browser compatibility  
Both UI and API testing coverage  
Video demonstrations of test execution  
Detailed test reports (Playwright HTML)  

---

**Created as part of Finacplus QA Automation Engineer Technical Assessment**