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

enum TTASK_PRIRORITY {
  "URGENT",
  "HIGH",
  "MEDIUM",
  "LOW",
}
export type TTask = {
  id: string;
  type: "TASK";
  priority: TTASK_PRIRORITY;
  status: "CLOSED" | "IN_PROGRESS" | "TO_DO" | "READY_FOR_REVIEW";
  title: string;
  assignee: TUSER;
};

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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
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
      thumbPicture: null,
    },
  },
  {
    id: "96063dfe-2d6d-11ef-bc8c-1f526be1483c",
    type: "TASK",
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
  },
  {
    id: "95ed89f8-2d6d-11ef-adf4-eb40040a8151",
    type: "TASK",
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
  },
  {
    id: "9595ded8-2d6d-11ef-adf4-bb519b2d8a89",
    type: "TASK",
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
  },
  {
    id: "81783e1e-2d6d-11ef-80aa-278a86a92f39",
    type: "TASK",
    priority: "LOW",
    status: "TO_DO",
    title: "Assignment DASHBOARD",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
  },
  {
    id: "8123f98a-2d6d-11ef-a674-73a3423189ec",
    type: "TASK",
    priority: "HIGH",
    status: "TO_DO",
    title: "Assignment DRAG",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
  },
  {
    id: "80b882ae-2d6d-11ef-81d0-2744333fafc4",
    type: "TASK",
    priority: "HIGH",
    status: "TO_DO",
    title: "Assignment LIST",
    assignee: {
      id: "87432df0-2d6c-11ef-b313-efbcaebabda4",
      role: "USER",
      fullName: "Abdelrahman Baher",
      nickName: "abdelrahmanbaher",
      thumbPicture: {
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
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
        id: "5515debf-b0e2-4cba-8bec-7fb9f022874e",
        link: "thumb/user/daaf/08f9bd3b-8532-4d46-ab4a-56c9b64edaaf.jpg",
        __typename: "Picture",
      },
    },
  },
];
