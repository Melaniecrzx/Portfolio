import KanbanBoardDark from "../assets/Kanban/KanbanBoard-dark.png"
import KanbanBoardLight from "../assets/Kanban/KanbanBoard-light.png"
import KanbanTaskDark from "../assets/Kanban/KanbanTask-dark.png"
import KanbanTaskLight from "../assets/Kanban/KanbanTask-light.png"
import KanbanCrudDark from "../assets/Kanban/KanbanCrud-dark.png"
import KanbanCrudLight from "../assets/Kanban/KanbanCrud-light.png"
import KanbanMobileDark from "../assets/Kanban/KanbanResponsive-dark.png"
import KanbanMobileLight from "../assets/Kanban/KanbanResponsive-light.png"
import KanbanAuthDark from "../assets/Kanban/KanbanAuth-dark.png"
import KanbanAuthLight from "../assets/Kanban/KanbanAuth-light.png"
import KanbanVideo from "../assets/Kanban/KanbanVideo.mp4"



export const projects = [
    {
        id: 1,
        slug: "kanban-board",
        title: "KANBAN BOARD",
        description: "This project is a solution to the Kanban task management web app.",
        techStack: [
            { category: "FRONTEND", items: ["React", "Tailwind CSS"] },
            { category: "BACKEND", items: ["Firebase (Auth + Firestore)"] },
        ],
        features: [
            { key: "board", label: "BOARD MANAGEMENT", sub: "Create, Edit, And Delete Boards" },
            { key: "tasks", label: "TASKS & SUBTASKS", sub: "Full task management with subtasks" },
            { key: "drag", label: "DRAG & DROP", sub: "Card movement between columns" },
            { key: "theme", label: "DARK/LIGHT MODE", sub: "Adaptive theme switching" },
            { key: "responsive", label: "FULLY RESPONSIVE", sub: "Optimized for mobile and desktop" },
        ],
        whatILearned: [
            "Implementing drag & drop functionality",
            "Structuring and optimizing Firestore database",
            "Handling authentication and user data with Firebase",
        ],
        screenshots: [
            { id: "auth", type: "portrait", feature: 'Authentification', dark: KanbanAuthDark, light: KanbanAuthLight },
            { id: "board", type: "portrait", feature: "BOARD MANAGEMENT", dark: KanbanBoardDark, light: KanbanBoardLight },
            { id: "tasks", type: "portrait", feature: "TASKS & SUBTASKS", dark: KanbanTaskDark, light: KanbanTaskLight },
            { id: "crud", type: "portrait", feature: "Create, Edit, And Delete Boards", dark: KanbanCrudDark, light: KanbanCrudLight },
            { id: "responsive", type: "portrait", feature: "FULLY RESPONSIVE", dark: KanbanMobileDark, light: KanbanMobileLight },
        ],
        video: KanbanVideo,
        liveDemo: "https://kanban-app-mcrzx.vercel.app/",
        sourceCode: "https://github.com/Melaniecrzx/Kanban-App.git",

    },
    {
        id: 2,
        slug: "portfolio",
        title: "Portfolio",
        description: "A fully responsive portfolio built from scratch, designed and developed to reflect my identity as a developer.",

        techStack: [
            { category: "FRONTEND", items: ["React", "Tailwind CSS"] },
        ],

        features: [
            {
                key: "traduction",
                label: "BILINGUAL",
                sub: "Full English and French support"
            },
            {
                key: "theme",
                label: "DARK/LIGHT MODE",
                sub: "Adaptive theme switching"
            },
            {
                key: "responsive",
                label: "FULLY RESPONSIVE",
                sub: "Optimized for all screen sizes"
            },
        ],

        whatILearned: [
            "Implementing internationalization (i18n) from scratch",
            "Designing and building a complete project end-to-end",
            "Translating a personal brand into a cohesive UI with Figma",
        ],
        screenshots: [
            { id: "board", feature: "BOARD MANAGEMENT", dark: KanbanBoardDark, light: KanbanBoardLight },
            { id: "tasks", feature: "TASKS & SUBTASKS", dark: KanbanTaskDark, light: KanbanTaskLight },
            { id: "crud", feature: "Create, Edit, And Delete Boards", dark: KanbanCrudDark, light: KanbanCrudLight },
            { id: "responsive", feature: "FULLY RESPONSIVE", dark: KanbanMobileDark, light: KanbanMobileLight },
        ],
        video: "",
        liveDemo: "https://kanban-app-mcrzx.vercel.app/",
        sourceCode: "https://github.com/Melaniecrzx/Kanban-App.git",

    },
    {
        id: 3,
        slug: "portfolio",
        title: "Portfolio",
        description: "A fully responsive portfolio built from scratch, designed and developed to reflect my identity as a developer.",

        techStack: [
            { category: "FRONTEND", items: ["React", "Tailwind CSS"] },
        ],

        features: [
            {
                key: "traduction",
                label: "BILINGUAL",
                sub: "Full English and French support"
            },
            {
                key: "theme",
                label: "DARK/LIGHT MODE",
                sub: "Adaptive theme switching"
            },
            {
                key: "responsive",
                label: "FULLY RESPONSIVE",
                sub: "Optimized for all screen sizes"
            },
        ],

        whatILearned: [
            "Implementing internationalization (i18n) from scratch",
            "Designing and building a complete project end-to-end",
            "Translating a personal brand into a cohesive UI with Figma",
        ],
        screenshots: [
            { id: "board", feature: "BOARD MANAGEMENT", dark: KanbanBoardDark, light: KanbanBoardLight },
            { id: "tasks", feature: "TASKS & SUBTASKS", dark: KanbanTaskDark, light: KanbanTaskLight },
            { id: "crud", feature: "Create, Edit, And Delete Boards", dark: KanbanCrudDark, light: KanbanCrudLight },
            { id: "responsive", feature: "FULLY RESPONSIVE", dark: KanbanMobileDark, light: KanbanMobileLight },
        ],
        video: "",
        liveDemo: "https://kanban-app-mcrzx.vercel.app/",
        sourceCode: "https://github.com/Melaniecrzx/Kanban-App.git",

    }

]