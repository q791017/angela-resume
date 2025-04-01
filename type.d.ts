type Locale = 'en-US' | 'zh-TW';

type RootProvider = Readonly<{
  children: React.ReactNode;
}>;

type ResumeDataProps = {
  personalInfo: {
    name: string;
    englishName: string;
    email: string;
    mobile: string;
  };
  uiTools: { title: string; description: string }[];
  ui: { title: string; items: { value: string }[] }[];
  frontEndTools: { title: string; description: string }[];
  frontEnd: { title: string; items: { value: string }[] }[];
  school: { title: string; duration: string; school: string; department: string }[];
  experience: {
    duration: string;
    company: string;
    position: string;
    description: string;
  }[];
  projectInfoTool: { title: string; items: { value: string }[] }[];
  projectInfoFunction: {
    title: string;
    items: { value: string; details: { detail: string }[] }[];
  }[];
};
