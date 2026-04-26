import KanbanBoardDark from "../assets/Kanban/KanbanBoard-dark.png";
import KanbanBoardLight from "../assets/Kanban/KanbanBoard-light.png";
import KanbanTaskDark from "../assets/Kanban/KanbanTask-dark.png";
import KanbanTaskLight from "../assets/Kanban/KanbanTask-light.png";
import KanbanCrudDark from "../assets/Kanban/KanbanCrud-dark.png";
import KanbanCrudLight from "../assets/Kanban/KanbanCrud-light.png";
import KanbanMobileDark from "../assets/Kanban/KanbanResponsive-dark.png";
import KanbanMobileLight from "../assets/Kanban/KanbanResponsive-light.png";
import KanbanAuthDark from "../assets/Kanban/KanbanAuth-dark.png";
import KanbanAuthLight from "../assets/Kanban/KanbanAuth-light.png";
import KanbanVideo from "../assets/Kanban/KanbanVideo.mp4";

import PortfolioHomeDark from "../assets/Portfolio/PortfolioHome-dark.png";
import PortfolioHomeLight from "../assets/Portfolio/PortfolioHome-light.png";
import PortfolioContactDark from "../assets/Portfolio/PortfolioContact-dark.png";
import PortfolioContactLight from "../assets/Portfolio/PortfolioContact-light.png";
import PortfolioAboutLight from "../assets/Portfolio/PortfolioAbout-light.png";
import PortfolioAboutDark from "../assets/Portfolio/PortfolioAbout-dark.png";
import PortfolioProjectDark from "../assets/Portfolio/PortfolioProject-dark.png";
import PortfolioProjectLight from "../assets/Portfolio/PortfolioProject-light.png";
import PortfolioWorkLight from "../assets/Portfolio/PortfolioWork-light.png";
import PortfolioWorkDark from "../assets/Portfolio/PortfolioWork-dark.png";
import PortfolioResponsiveDark from "../assets/Portfolio/PortfolioResponsive-dark.png";
import PortfolioResponsiveLight from "../assets/Portfolio/PortfolioResponsive-light.png";
import PortfolioVideo from "../assets/Portfolio/PortfolioVideo.mp4";

import FinanceAppOverview from "../assets/FinanceApp/FinanceApp-overview.png";
import FinanceAppBudgets from "../assets/FinanceApp/FinanceApp-budgets.png";
import FinanceAppPots from "../assets/FinanceApp/FinanceApp-pots.png";
import FinanceAppTransactions from "../assets/FinanceApp/FinanceApp-transactions.png";
import FinanceAppResponsive from "../assets/FinanceApp/FinanceApp-responsive.png";
import FinanceAppBills from "../assets/FinanceApp/FinanceApp-bills.png";
import FinanceAppVideo from "../assets/FinanceApp/FinanceApp.mp4";

export const projects = [
  {
    id: 1,
    slug: "kanban-board",
    title: "KANBAN BOARD",
    description:
      "This project is a solution to the Kanban task management web app.",
    techStack: [
      { category: "FRONTEND", items: ["React", "Tailwind CSS"] },
      { category: "BACKEND", items: ["Firebase (Auth + Firestore)"] },
    ],
    features: [
      {
        key: "board",
        label: "BOARD MANAGEMENT",
        sub: "Create, Edit, And Delete Boards",
      },
      {
        key: "tasks",
        label: "TASKS & SUBTASKS",
        sub: "Full task management with subtasks",
      },
      {
        key: "drag",
        label: "DRAG & DROP",
        sub: "Card movement between columns",
      },
      {
        key: "theme",
        label: "DARK/LIGHT MODE",
        sub: "Adaptive theme switching",
      },
      {
        key: "responsive",
        label: "FULLY RESPONSIVE",
        sub: "Optimized for mobile and desktop",
      },
    ],
    whatILearned: [
      "Implementing drag & drop functionality",
      "Structuring and optimizing Firestore database",
      "Handling authentication and user data with Firebase",
    ],
    screenshots: [
      {
        id: "auth",
        type: "portrait",
        feature: "Authentification",
        dark: KanbanAuthDark,
        light: KanbanAuthLight,
      },
      {
        id: "board",
        type: "portrait",
        feature: "BOARD MANAGEMENT",
        dark: KanbanBoardDark,
        light: KanbanBoardLight,
      },
      {
        id: "tasks",
        type: "portrait",
        feature: "TASKS & SUBTASKS",
        dark: KanbanTaskDark,
        light: KanbanTaskLight,
      },
      {
        id: "crud",
        type: "portrait",
        feature: "Create, Edit, And Delete Boards",
        dark: KanbanCrudDark,
        light: KanbanCrudLight,
      },
      {
        id: "responsive",
        type: "portrait",
        feature: "FULLY RESPONSIVE",
        dark: KanbanMobileDark,
        light: KanbanMobileLight,
      },
    ],
    video: KanbanVideo,
    liveDemo: "https://kanban-app-mcrzx.vercel.app/",
    sourceCode: "https://github.com/Melaniecrzx/Kanban-App.git",
  },
  {
    id: 2,
    slug: "portfolio",
    title: "Portfolio",
    description:
      "A fully responsive portfolio built from scratch, designed and developed to reflect my identity as a developer.",

    techStack: [{ category: "FRONTEND", items: ["React", "Tailwind CSS"] }],

    features: [
      {
        key: "traduction",
        label: "BILINGUAL",
        sub: "Full English and French support",
      },
      {
        key: "theme",
        label: "DARK/LIGHT MODE",
        sub: "Adaptive theme switching",
      },
      {
        key: "responsive",
        label: "FULLY RESPONSIVE",
        sub: "Optimized for all screen sizes",
      },
    ],

    whatILearned: [
      "Implementing internationalization (i18n) from scratch",
      "Designing and building a complete project end-to-end",
      "Translating a personal brand into a cohesive UI with Figma",
    ],
    screenshots: [
      {
        id: "board",
        feature: "Porfolio Home Page",
        dark: PortfolioHomeDark,
        light: PortfolioHomeLight,
      },
      {
        id: "contact",
        feature: "Contact Page",
        dark: PortfolioContactDark,
        light: PortfolioContactLight,
      },
      {
        id: "project",
        feature: "Project Page",
        dark: PortfolioProjectDark,
        light: PortfolioProjectLight,
      },
      {
        id: "work",
        feature: "Work Page",
        dark: PortfolioWorkDark,
        light: PortfolioWorkLight,
      },
      {
        id: "about",
        feature: "About Page",
        dark: PortfolioAboutDark,
        light: PortfolioAboutLight,
      },
      {
        id: "responsive",
        feature: "FULLY RESPONSIVE",
        dark: PortfolioResponsiveDark,
        light: PortfolioResponsiveLight,
      },
    ],
    video: PortfolioVideo,
    liveDemo: "https://portfolio-melaniecrzxn.vercel.app/",
    sourceCode: "https://github.com/Melaniecrzx/Portfolio.git",
  },
  {
    id: 3,
    slug: "financeApp",
    title: "Finance App",
    description:
      "Personal finance app with TypeScript, Redux Toolkit, Jotai and Framer Motion",
    techStack: [
      {
        category: "FRONTEND",
        items: ["React", "Tailwind CSS", "Redux", "Jotai", "Typescript"],
      },
      { category: "BACKEND", items: ["In work"] },
      { category: "TESTS", items: ["Vitest"] },
    ],

    features: [
      {
        key: "overview",
        label: "OVERVIEW DASHBOARD",
        sub: "Balance, income, expenses at a glance",
      },
      {
        key: "budget",
        label: "BUDGET MANAGEMENT",
        sub: "Create, edit, delete budgets with spending tracking",
      },
      {
        key: "transactions",
        label: "TRANSACTIONS",
        sub: "Search, filter, sort and paginate transactions",
      },
      {
        key: "bills",
        label: "RECURRING BILLS",
        sub: "Paid, upcoming and due soon status",
      },
      {
        key: "pots",
        label: "POTS",
        sub: "Savings goals with add/withdraw functionality",
      },
      {
        key: "animation",
        label: "ANIMATED SIDEBAR",
        sub: "Collapsible with Framer Motion",
      },
      {
        key: "responsive",
        label: "FULLY RESPONSIVE",
        sub: "Mobile navbar + desktop sidebar",
      },
    ],

    whatILearned: [
      "Typing a full React app with TypeScript — interfaces, union types, generics",
      "State management architecture — when to use Redux vs Jotai vs useState",
      "Redux Toolkit — slices, reducers, PayloadAction, useAppSelector/useAppDispatch",
      "Feature-based project structure for scalability",
    ],
    screenshots: [
      {
        id: "board",
        feature: "Finance App Overview Dashboard",
        dark: FinanceAppOverview,
        light: FinanceAppOverview,
      },
      {
        id: "transactions",
        feature: "Transaction Page",
        dark: FinanceAppTransactions,
        light: FinanceAppTransactions,
      },
      {
        id: "bills",
        feature: "Recurring Bills Page",
        dark: FinanceAppBills,
        light: PortfolioProjectLight,
      },
      {
        id: "budgets",
        feature: "Budget Management",
        dark: FinanceAppBudgets,
        light: FinanceAppBudgets,
      },
      {
        id: "pots",
        feature: "Pots Page",
        dark: FinanceAppPots,
        light: FinanceAppPots,
      },
      {
        id: "responsive",
        feature: "FULLY RESPONSIVE",
        dark: FinanceAppResponsive,
        light: FinanceAppResponsive,
      },
    ],
    video: FinanceAppVideo,
    liveDemo: "https://finance-app-melaniecrzx.vercel.app/",
    sourceCode: "https://github.com/Melaniecrzx/Finance-app-V2.git",
  },
];
