import { Flex, Heading, Box } from "@chakra-ui/react";
import { SearchCard } from "./components/SearchCard";
import { ProfileBox } from "./components/ProfileBox";
import { FaJava, FaPython, FaDatabase, FaBriefcase, FaQuestion } from "react-icons/fa";

const App = () => {
  const topSections = [
    { title: "New Jobs", icon: FaBriefcase, buttons: ["Full-time", "Remote", "Tech"] },
    { title: "Java Code", icon: FaJava, buttons: ["Spring", "Android", "J2EE"] },
    { title: "SQL Code", icon: FaDatabase, buttons: ["MySQL", "PostgreSQL", "TSQL"] },
    { title: "Python Code", icon: FaPython, buttons: ["Django", "ML", "Automation"] },
    { title: "Interview Quiz", icon: FaQuestion, buttons: ["Tech", "HR", "Coding"] }
  ];

  return (
    <Box minH="100vh" bg="brand.neutral">
      <Heading textAlign="center" py={8} color="brand.primary">
        Job & Code Portal
      </Heading>

      {/* Top Section */}
      <Flex
        p={4}
        overflowX="auto"
        justifyContent={["flex-start", "center"]}
      >
        {topSections.map((section, index) => (
          <SearchCard
            key={index}
            title={section.title}
            placeholder={`Search ${section.title}`}
            buttons={section.buttons}
          />
        ))}
      </Flex>

      {/* Bottom Sections */}
      <Box px={4}>
        <ProfileBox
          title="Recruiters"
          items={["Google", "Microsoft", "Amazon", "Meta", "Netflix"]}
        />
        <ProfileBox
          title="Programmers"
          items={["John (Java)", "Sarah (Python)", "Mike (SQL)", "Emma (Full Stack)", "Alex (DevOps)"]}
        />
      </Box>
    </Box>
  );
};

export default App;