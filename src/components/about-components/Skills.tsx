import AnimatedFadeUp from "../motion-components/AnimatedFadeUp"
import SplitContainer from "../SplitContainer"

const Skills: React.FC = () => {
  return <SplitContainer left={<SkillsTab />} right={<SkillsBody />} />
}

export default Skills

const SkillsBody: React.FC = () => {
  return (
    <AnimatedFadeUp threshold={0.3}>
      <div className="-mx-3 sm:mx-0">
        <Frontend />
        <Backend />
      </div>
    </AnimatedFadeUp>
  )
}

const SkillsTab: React.FC = () => {
  return <h5 className="font-[350] mb-6">Skills</h5>
}

const Frontend: React.FC = () => {
  return (
    <div className="w-full border border-[#ebeaee] px-4 py-4 sm:py-6 rounded-xl mb-6 sm:mb-8">
      <p className="font-medium text-base lg:text-lg">Frontend Development</p>
      <p className="flex font-[350]  mt-2.5 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-normal">
        Responsive Design • Creative Development • JS Frameworks • Web Animations • Semantic Programming
        • Cross-Browser Testing • Accessability Standards
      </p>
      <ul className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-[350]">
        <p className="flex items-center gap-1.5 ">
          <img src="/icons/react.svg" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          React
        </p>
        <p className="flex items-center gap-1.5 ">
          <img src="/icons/nextjs.svg" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          NextJS
        </p>
        <p className="flex items-center gap-1.5 ">
          <img src="/icons/typescript.svg" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Typescript
        </p>
        <p className="flex items-center gap-1.5 ">
          <img src="/icons/tailwind.png" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Tailwind CSS
        </p>
        <p className="flex items-center gap-1.5 ">
          <img src="/icons/figma.svg" alt=""  loading="lazy" className="max-w-2 sm:max-w-2.5 lg:max-w-3.5" />
          Figma
        </p>
        <p className="flex items-center gap-1.5 font-[350] ">
          <img src="/icons/git.png" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Version Control
        </p>
      </ul>
    </div>
  )
}

const Backend: React.FC = () => {
  return (
    <div className="w-full border border-[#ebeaee] px-4 sm:px-4 py-4 sm:py-6 bs rounded-xl mb-8 ">
      <p className="font-medium text-base lg:text-lg">Backend Development</p>
      <p className="flex font-[350]  mt-2.5 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-normal">
        Database Management • Web Scraping • Data Structures and Algorithms • Containerization • RESTful
        API • Authentication • Server-side Logic
      </p>
      <ul className="flex gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm font-[350]">
        <p className="flex items-center gap-1.5  ">
          <img src="/icons/fast.svg" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Fast API
        </p>
        <p className="flex items-center gap-1.5  ">
          <img src="/icons/psql.png" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          PostgreSQL
        </p>
        <p className="flex items-center gap-1.5  ">
          <img src="/icons/mongo.svg" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Mongo DB
        </p>
        <p className="flex items-center gap-1.5  ">
          <img src="/icons/firebase.svg" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Firebase
        </p>
        <p className="flex items-center gap-1.5  ">
          <img src="/icons/docker.png" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 lg:max-w-5" />
          Docker
        </p>
        <p className="flex items-center gap-1.5  ">
          <img src="/icons/selenium.png" alt=""  loading="lazy" className="max-w-3.5 sm:max-w-4 " />
          Selenium
        </p>
      </ul>
    </div>
  )
}
