<div align='center'>
    <h1 align='center'>WeekDay - Candidate Application Platform</h1>
    <h3>This is a testing project for the role of SDE-1 Frontend in Weekday</h3>
</div>

<br/>

This is a Weekday Candidate application Platform which displays all jobs from this [Weekday's API]("https://api.weekday.technology/adhoc/getSampleJdJSON").

## Demo

![Platform GIF](.github/images/Weekday.gif)

## Features

- **Job Cards**: Each job listing displayed with as a card with JobTitle, Location, Salary, Job description (limited to a certain number of characters with an option to expand), Experience required, Apply button/link.
- **Filters**: Can apply filters to refine job listings based on Experience, Salary, Location, Role.
- **Infinite Scroll**: Where user can just scroll to the bottom of page to load more jobs.
- **Responsive**: Completely responsive and works well on all screen sizes including mobiles.

## Tech Stack

- [React](https://react.dev/) - Library for Frontend
- [Typescript](https://www.typescriptlang.org/) – Language
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/rtk-query) - State Management
- [Material UI](https://mui.com/) - Components and Styles
- [Vite](https://vitejs.dev/) - Frontend Tooling

## Getting Started

### Prerequisites

Here's what you need to be able to run this platform:

- Node.js (version >= 18)
- bun package manager(To install bun run `npm install -g bun`)

### 1. Clone the repository

```shell
git clone https://github.com/YashwanthKothakota9/WeekdayCandidatePlatform.git
cd WeekdayCandidatePlatform
```

### 2. Install all dependencies

```shell
bun install
```

### 3. Run the dev server

```shell
bun run dev
```

### 4. Open the app in your browser

Visit [http://localhost:5173](http://localhost:5173) in your browser.
