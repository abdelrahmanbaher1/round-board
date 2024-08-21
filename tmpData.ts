export type TUSER = {
  id: string;
  role: "USER" | "ADMIN";
  email?: string;
  fullName: string;
  nickName?: string;
  thumbPicture: {
    id: string;
    link: string;
  } | null;
};
export type TProject = {
  id: string;
  key: string;
  name: string;
  isFavorite: boolean;
};
export type TTeam = {
  id: string;
  name: string;
  projects: TProject[];
};
export type TORGNAIZTION = {
  id: string;
  displayName: string;
  key: string;
  userInfo: TUSER;
  teams: TTeam[];
  picture: {
    id: string;
    link: string;
  };
};

export type TMember = {
  status: "ACTIVE" | "IN_ACTIVE";
  name: string;
  email: string;
  isOwner: boolean;
  thumbPicture: {
    id: string;
    link: string;
  } | null;
};

type TModule = {
  id: string;
  name: string;
  title: string;
  color: string;
  projectId: string;
};
export type TTask = {
  id: string;
  type: "TASK" | "MACRO";
  priority: "URGENT" | "HIGH" | "MEDIUM" | "LOW";
  status: "CLOSED" | "IN_PROGRESS" | "TO_DO" | "READY_FOR_REVIEW" | 'ERROR';
  title: string;
  assignee: TUSER;
  module: TModule;
};

export type TRound = {
  id: string;
  status: "DONE" | "IN_PROGRESS";
  start_date: string;
  end_date: string;
  teamMembers: TMember[];
};

const MODULES: TModule[] = [
  {
    id: "e8e89fbc-06f7-11eb-893c-3fce5b7b87d9",
    name: "Team Work",
    title: "Team Work",
    color: "#FAB1A0",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "3dbf2e34-06f8-11eb-9ee8-0b99de096d50",
    name: "Patterns",
    title: "Patterns",
    color: "#00B894",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "1b432a62-06f9-11eb-80ee-ff6b11e6bd50",
    name: "Libraries",
    title: "Libraries",
    color: "#6C5CE7",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "77c518a4-06f9-11eb-b731-2f394170e447",
    name: "Practice",
    title: "Practice",
    color: "#A29BFE",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "6b7c48c8-06fa-11eb-9c3b-ef5fbf7680b8",
    name: "AutomatedTests",
    title: "AutomatedTests",
    color: "#81ECEC",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "e4e5cf0e-06fa-11eb-843c-f7d5e76a5800",
    name: "Technology",
    title: "Technology",
    color: "#00B894",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "b9c440fc-06fb-11eb-97da-9bfe00cecaba",
    name: "Frameworks",
    title: "Frameworks",
    color: "#FDCB6E",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "0cc44cec-72b4-11eb-9262-b336acad461d",
    name: "UI / UX Design",
    title: "UI / UX Design",
    color: "#00CEC9",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
  {
    id: "ac113c08-c848-11eb-b486-5fad80081bd9",
    name: "Soft. Design",
    title: "Soft. Design",
    color: "#FDCB6E",
    projectId: "3e75a2e2-0570-11eb-a05f-230d481b200a",
  },
];

export const PROJECTS: TProject[] = [
  {
    id: "0661fc5c-ddd0-11e9-ac32-eb396f188290",
    key: "BET",
    name: "👨🏻‍💻 Back-End Training",
    isFavorite: true,
  },
  {
    id: "3e75a2e2-0570-11eb-a05f-230d481b200a",
    key: "AOC",
    name: "🧑‍💻 Front-End Web & Mobile",
    isFavorite: true,
  },
  {
    id: "452ece30-7a16-11ec-a581-2f8f899f1989",
    key: "QT",
    name: "QA Training",
    isFavorite: false,
  },
  {
    id: "a5af209a-85c7-11ec-a132-a74f96bf54b4",
    key: "UXT",
    name: "👨‍🎨 UI/UX Training",
    isFavorite: false,
  },
  {
    id: "32b0afdc-9ae9-11ec-93e6-0720c8d79d99",
    key: "PM",
    name: "👨‍💼 PM & QA",
    isFavorite: false,
  },
  {
    id: "91324286-593e-11ee-8228-b7ccfb303521",
    key: "UNITY",
    name: "Unity",
    isFavorite: false,
  },
];

export const MEMBERS: TMember[] = [
  {
    name: "Marino Panariello",
    email: "marino.panariello@lastingdynamics.com",
    status: "ACTIVE",
    isOwner: true,
    thumbPicture: {
      id: "",
      link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
    },
  },
  {
    name: "Brandon Watson",
    email: "max.hoffman@example.com",
    status: "ACTIVE",
    isOwner: false,
    thumbPicture: {
      id: "",
      link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
    },
  },
  {
    name: "Norma Cooper",
    email: "darrell.duncan@example.com",
    status: "ACTIVE",
    isOwner: false,
    thumbPicture: {
      id: "",
      link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
    },
  },
  {
    name: "Jerome Pena",
    email: "wesley.white@example.com",
    status: "IN_ACTIVE",
    isOwner: false,
    thumbPicture: {
      id: "",
      link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
    },
  },
  {
    name: "Arlene Steward",
    email: "alberto.ward@example.com",
    status: "IN_ACTIVE",
    isOwner: false,
    thumbPicture: {
      id: "",
      link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
    },
  },
  {
    name: "Max Flores",
    email: "logan.hopkins@example.com",
    status: "ACTIVE",
    isOwner: false,
    thumbPicture: {
      id: "",
      link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
    },
  },
];
export const ORGANIZATIONS: TORGNAIZTION = {
  id: "9c3f6020-97e9-11e9-89fa-771de3ee85df",
  key: "ld",
  displayName: "Lasting Dynamics",
  userInfo: {
    id: "878f3128-2d6c-11ef-9d99-37e1f2fb4f37",
    role: "USER",
    fullName: "Abdelrahman Baher",
    email: "abdelrahmanbaher2@gmail.com",
    thumbPicture: {
      id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
      link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
    },
  },
  picture: {
    id: "ac5f425d-7035-4523-b827-8aae7e833fb1",
    link: "thumb/organisation/a3cd/4c800824-3add-48a4-b80e-3c4d49d4a3cd.jpg",
  },
  teams: [
    {
      id: "c9175214-d3cc-11e9-bcb5-3b6d0ac34161",
      name: "LD Academy",
      projects: [
        {
          id: "0661fc5c-ddd0-11e9-ac32-eb396f188290",
          key: "BET",
          name: "👨🏻‍💻 Back-End Training",
          isFavorite: true,
        },
        {
          id: "3e75a2e2-0570-11eb-a05f-230d481b200a",
          key: "AOC",
          name: "🧑‍💻 Front-End Web & Mobile",
          isFavorite: true,
        },
        {
          id: "452ece30-7a16-11ec-a581-2f8f899f1989",
          key: "QT",
          name: "QA Training",
          isFavorite: false,
        },
        {
          id: "a5af209a-85c7-11ec-a132-a74f96bf54b4",
          key: "UXT",
          name: "👨‍🎨 UI/UX Training",
          isFavorite: false,
        },
        {
          id: "32b0afdc-9ae9-11ec-93e6-0720c8d79d99",
          key: "PM",
          name: "👨‍💼 PM & QA",
          isFavorite: false,
        },
        {
          id: "91324286-593e-11ee-8228-b7ccfb303521",
          key: "UNITY",
          name: "Unity",
          isFavorite: false,
        },
      ],
    },
  ],
};
export const TASKS: TTask[] = [
  {
    id: "965237e0-2d6d-11ef-bc8c-b7659e1e243b",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "React Native Assignment 2",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "962737d4-2d6d-11ef-adf4-7f464824364f",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "JEST",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "9621fd50-2d6d-11ef-84ec-c7d9b08854d5",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "Docker",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "961e0ea2-2d6d-11ef-bf38-dbef225c1748",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "Assignment TESTS",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "961b9550-2d6d-11ef-a674-c78e71dbcec5",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "React Testing Library",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95ba3dd2-2d6d-11ef-a674-7b316715be2b",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title:
      "Synchronous vs. asynchronous communication: what’s the difference (and why it matters)",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95a79196-2d6d-11ef-a7ff-436d4e665fc6",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "MVP - why is it so important?",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "96029866-2d6d-11ef-995b-dbbed8742545",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title: "Async Nature Of setState()",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: {
        id: "",
        link: "https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "96063dfe-2d6d-11ef-bc8c-1f526be1483c",
    type: "MACRO",
    priority: "HIGH",
    status: "TO_DO",
    title: "Assignment DRAG",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95ed89f8-2d6d-11ef-adf4-eb40040a8151",
    type: "MACRO",
    priority: "LOW",
    status: "TO_DO",
    title: "Assignment DASHBOARD",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95e26474-2d6d-11ef-bc8c-177014fdfb1f",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native Styling + RN styling Libraries",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95e78da0-2d6d-11ef-995b-37f8f994bd84",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "Next.js",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95eaa5e4-2d6d-11ef-a674-b3a9939e6ee4",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "Building React native components and Layout",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95c251ca-2d6d-11ef-bc8c-87d6ccae105a",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native Setup",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95cc3294-2d6d-11ef-adf4-cfdd04404fb7",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native Debugging",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95d1e784-2d6d-11ef-bf38-03b851787823",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "React Native Assignment",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95be83a6-2d6d-11ef-a6b9-739035dc83c0",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native - React Navigation",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95bc2926-2d6d-11ef-adf4-036bda61f23c",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "GraphQL Basics",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95b87510-2d6d-11ef-bf38-6364faeae7a9",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Material UI",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "958cd964-2d6d-11ef-bc8c-cf47dc9e85a7",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "React Query",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "9624a014-2d6d-11ef-bc8c-af1ea154a57f",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Typescript",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "95e56ab6-2d6d-11ef-a7ff-9ff1e908e3c3",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Most Relevant Architectural Patterns",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "9591995e-2d6d-11ef-bf38-97058255f977",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Learn Basics from LD docs",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "960853be-2d6d-11ef-a7ff-8f03ea507f4b",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "ES06+ Exercises",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "9595ded8-2d6d-11ef-adf4-bb519b2d8a89",
    type: "MACRO",
    priority: "HIGH",
    status: "IN_PROGRESS",
    title: "Assignment LIST",
    assignee: {
      id: "1bebbad0-2d6d-11ef-b313-af8aaaaa9dbb",
      role: "USER",
      fullName: "Cristian Cureu",
      nickName: "cristiancureu",
      thumbPicture: null,
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "81783e1e-2d6d-11ef-80aa-278a86a92f39",
    type: "MACRO",
    priority: "LOW",
    status: "TO_DO",
    title: "Assignment DASHBOARD",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],

    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "8193015e-2d6d-11ef-85ee-1f52b6155e44",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "Building React native components and Layout",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "818423be-2d6d-11ef-a674-0b320adf57c9",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "MVP - why is it so important?",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "8153fa72-2d6d-11ef-93e5-6b8a59a5d65e",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "React Native Assignment",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "814acca4-2d6d-11ef-81d0-2b0090a0399e",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Async Nature Of setState()",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "816797b2-2d6d-11ef-bc8c-6f804e1b39c0",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title: "Learn Basics from LD docs",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "81633f3c-2d6d-11ef-80aa-034f051f06c8",
    type: "TASK",
    priority: "HIGH",
    status: "TO_DO",
    title: "React Query",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "81284274-2d6d-11ef-93e5-a38f2f84a41e",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native Debugging",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "811fc59a-2d6d-11ef-85ee-cb60eb564dd5",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Typescript",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "8123f98a-2d6d-11ef-a674-73a3423189ec",
    type: "MACRO",
    priority: "HIGH",
    status: "TO_DO",
    title: "Assignment DRAG",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80f433f8-2d6d-11ef-a674-9bae2b2eea0d",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "Docker",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80fe5ab8-2d6d-11ef-9453-dba82ab75daa",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title: "Async / Await",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "810e43e2-2d6d-11ef-bc8c-1fb819c97119",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "Next.js",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80d43170-2d6d-11ef-b1ad-7f2ee510c0c9",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "Most Relevant Architectural Patterns",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80fa4cd4-2d6d-11ef-93e5-1bf450599108",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "React Testing Library",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80dea650-2d6d-11ef-9ccd-e795012e7c56",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "React Native Assignment 2",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "81016b72-2d6d-11ef-b1ad-e3be234a109f",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native Styling + RN styling Libraries",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "8104adaa-2d6d-11ef-81d0-577591a3e8a4",
    type: "TASK",
    priority: "HIGH",
    status: "TO_DO",
    title: "Material UI",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80edac40-2d6d-11ef-80aa-ff68ebe2caff",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native Setup",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80e8ec8c-2d6d-11ef-85ee-1b1639a629ec",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title: "SPA vs MPA",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80cafdb2-2d6d-11ef-88b8-e301d7584deb",
    type: "TASK",
    priority: "HIGH",
    status: "READY_FOR_REVIEW",
    title: "ES06+ Exercises",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80c8b160-2d6d-11ef-93e5-4f0d7d51a542",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "React Native - React Navigation",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80c28736-2d6d-11ef-9453-630d7e4a91d6",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "GraphQL Basics",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80bdb558-2d6d-11ef-85ee-3bdb8e6fd416",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "JEST",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80b882ae-2d6d-11ef-81d0-2744333fafc4",
    type: "MACRO",
    priority: "HIGH",
    status: "TO_DO",
    title: "Assignment LIST",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80b1be24-2d6d-11ef-80aa-8316c8fb569e",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title:
      "Synchronous vs. asynchronous communication: what’s the difference (and why it matters)",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "81089b22-2d6d-11ef-9ccd-7b4a9ade53b4",
    type: "TASK",
    priority: "HIGH",
    status: "CLOSED",
    title: "SCRUM in depth",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",

      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "80935146-2d6d-11ef-81d0-a359e23122dd",
    type: "TASK",
    priority: "MEDIUM",
    status: "TO_DO",
    title: "Assignment TESTS",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
  {
    id: "808ea38a-2d6d-11ef-93e5-6bfebfe248ed",
    type: "TASK",
    priority: "URGENT",
    status: "IN_PROGRESS",
    title: "Agile Methodologies",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "",
        link: "",
      },
    },
    module: MODULES[Math.floor(Math.random() * MODULES.length)],
  },
];

export const RETROSPECTIVES: TRound[] = [
  {
    id: "1",
    status: "IN_PROGRESS",
    start_date: "2024-08-01T10:00:00Z",
    end_date: "2024-08-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "2",
    status: "DONE",
    start_date: "2024-07-01T10:00:00Z",
    end_date: "2024-07-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "3",
    status: "IN_PROGRESS",
    start_date: "2024-08-15T10:00:00Z",
    end_date: "2024-08-21T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "4",
    status: "DONE",
    start_date: "2024-06-01T10:00:00Z",
    end_date: "2024-06-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "5",
    status: "IN_PROGRESS",
    start_date: "2024-09-01T10:00:00Z",
    end_date: "2024-09-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "6",
    status: "DONE",
    start_date: "2024-05-01T10:00:00Z",
    end_date: "2024-05-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "7",
    status: "IN_PROGRESS",
    start_date: "2024-09-15T10:00:00Z",
    end_date: "2024-09-21T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "8",
    status: "DONE",
    start_date: "2024-04-01T10:00:00Z",
    end_date: "2024-04-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "9",
    status: "IN_PROGRESS",
    start_date: "2024-10-01T10:00:00Z",
    end_date: "2024-10-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "10",
    status: "DONE",
    start_date: "2024-03-01T10:00:00Z",
    end_date: "2024-03-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "11",
    status: "IN_PROGRESS",
    start_date: "2024-10-15T10:00:00Z",
    end_date: "2024-10-21T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "12",
    status: "DONE",
    start_date: "2024-02-01T10:00:00Z",
    end_date: "2024-02-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "13",
    status: "IN_PROGRESS",
    start_date: "2024-11-01T10:00:00Z",
    end_date: "2024-11-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "14",
    status: "DONE",
    start_date: "2024-01-01T10:00:00Z",
    end_date: "2024-01-07T17:00:00Z",
    teamMembers: MEMBERS,
  },
  {
    id: "15",
    status: "IN_PROGRESS",
    start_date: "2024-11-15T10:00:00Z",
    end_date: "2024-11-21T17:00:00Z",
    teamMembers: MEMBERS,
  },
];
