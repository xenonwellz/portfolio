import {
    FileJsIcon,
    FilePyIcon,
    CodeIcon,
    AtomIcon,
    HexagonIcon,
    StackIcon,
    FileSqlIcon,
    FishIcon,
    LeafIcon,
    AmazonLogoIcon,
    PackageIcon,
    GitBranchIcon,
    InfinityIcon,
    BrowserIcon,
    CubeIcon,
    GitMergeIcon,
    UsersFourIcon,
    GithubLogoIcon,
    XLogoIcon,
    LinkedinLogoIcon,
    FileRsIcon,
} from '@phosphor-icons/react'

export const HERO_CONTENT = {
    title: 'Obed Ovabor',
    subtitle: 'Building the future of software, one line at a time.',
    description:
        'Crafting high-performance architectures and decentralized systems using Rust, TS/JS, Python, and Elixir.',
}

export const CONTACT = {
    email: 'hello@obedovabor.me',
    resume: '/files/Obed Ovabor Resume.pdf',
}

export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'My Work', href: '#work' },
]

export const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com', icon: GithubLogoIcon },
    { name: 'X', href: 'https://x.com', icon: XLogoIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinLogoIcon },
]

export const IMAGES = {
    experience: {
        xenrad: '/images/experience/xenrad.avif',
        agroease: '/images/experience/agroease.avif',
        bful: '/images/experience/bful.avif',
        flyte: '/images/experience/flyte.avif',
    },
    projects: {
        agroease: '/images/projects/agroease.avif',
        smcDao: '/images/projects/smc-dao.avif',
        peniwallet: '/images/projects/peniwallet.avif',
        xcelrad: '/images/projects/xcelrad.avif',
        faan: '/images/projects/faan.avif',
        misas: '/images/projects/misas.avif',
    },
    services: {
        work: '/images/work.avif',
        leadership: [
            '/images/leadership/1.avif',
            '/images/leadership/2.avif',
            '/images/leadership/3.avif',
        ],
    },
    user: '/images/me.avif',
}

export const EXPERIENCES = [
    {
        company: 'Xenrad',
        role: 'Founder',
        duration: 'Present',
        logo: IMAGES.experience.xenrad,
    },
    {
        company: 'Agroease Limited',
        role: 'Deputy CTO',
        duration: '2024',
        logo: IMAGES.experience.agroease,
    },
    {
        company: 'Blockchain FUL',
        role: 'Blockchain Developer',
        duration: '2023',
        logo: IMAGES.experience.bful,
    },
    {
        company: 'Flyte Tech',
        role: 'Fullstack Engineer',
        duration: '2022',
        logo: IMAGES.experience.flyte,
    },
]

export const PROJECTS = [
    {
        id: 'agroease',
        title: 'Agroease',
        image: IMAGES.projects.agroease,
        link: 'https://agroease.trade',
        hasButton: true,
        side: 'left' as const,
        description:
            'At Agroease, I led mobile development as Deputy CTO where I built an e-commerce app with secure payments, real-time tracking, and offline reliability for farmers.',
        problem:
            'The agricultural system here is quite challenging, with too many middlemen which often leads to high prices, low farmer profits, and food waste. The system is often not fair and can be quite taxing on everyone involved.',
        goal: 'The goal of Agroease is to make agriculture simple, profitable and sustainable by linking farmers and buyers directly, providing access to the right people, markets, and support systems that drive food security and economic growth.',
        result: 'The challenges of the old agricultural system is why Agroease focused on creating a straightforward digital marketplace that directly connects farmers to buyers, helping them sell their harvest quickly and efficiently. I built a more transparent and fair system, ensuring farmers get better prices for their hard work and less food is lost along the way.',
    },
    {
        id: 'smc-dao',
        title: 'SMC DAO',
        image: IMAGES.projects.smcDao,
        link: 'https://smcdao.org',
        hasButton: true,
        side: 'right' as const,
        description:
            'At SMC DAO, I built a complete e-commerce platform where I developed RESTful APIs, integrated web3 payments, enhanced performance, and worked closely with the design team to deliver a secure and visually appealing for users.',
        problem:
            'In the crypto space, information is not easily accessible and often fragmented across spaces, there are also not many communities for people interested in the digital economy to learn and grow together.',
        goal: 'The goal is to become the most valuable digital community in the world with a variety of products within the digital economy, providing a space where people could finally learn, connect, and grow together, with access to organized lessons, quizzes, and reliable information.',
        result: 'SMC DAO provides a space for people to grow at ease and learn about blockchain and digital currency with incentives to motivate them.',
    },
    {
        id: 'peniwallet',
        title: 'Peniwallet',
        image: IMAGES.projects.peniwallet,
        link: 'https://peniwallet.com',
        hasButton: true,
        side: 'left' as const,
        description:
            'Working at Peniwallet, I built and maintained the backend systems that powered our platform, using TypeScript, Node.js, and handled DevOps processes, from containerized deployments to CI/CD pipelines.',
        problem:
            'There are typically many challenges in the digital economy like complexity in standard crypto wallets, manual efforts, cost of performing airdrops and large payrolls. Community engagements are discouraged by these complexities.',
        goal: 'The primary goal is being the ultimate solution for large scale token distributions and everyday crypto transactions, the most secure and user friendly wallet, and completely simplifying the crypto experience for everyone.',
        result: 'Peniwallet provides a dynamic and community driven crypto world which is efficient and built on simplicity and speed, allowing users to enjoy gasless transactions and features which allows for tokens to be sent to numerous addresses instantly.',
    },
    {
        id: 'xcel-radiology',
        title: 'Xcel Radiology',
        image: IMAGES.projects.xcelrad,
        link: 'https://xcelradiology.com',
        hasButton: true,
        side: 'right' as const,
        description:
            'I worked at Xcel Radiology where I designed and implemented microservices using Python Django and PostgreSQL, which ensured efficient and secure handling of medical data.',
        problem:
            'LanX is designed to help businesses launch powerful, AI-driven websites with ease. This modern SaaS and landing page template blends innovation with sleek design, offering advanced features tailored for AI startups and tech enterprises.',
        goal: 'The primary goal of LanX is to offer businesses an intuitive and cutting-edge SaaS and landing page template, seamlessly combining advanced features with sleek design. Built for AI startups and tech enterprises.',
        result: 'In conclusion, LanX is the ultimate solution for AI startups and tech businesses seeking a modern, professional, and feature-rich SaaS and landing page template. With its intuitive design, seamless functionality, and flexibility.',
    },
    {
        id: 'mmia',
        title: 'MMIA staff access control system',
        image: IMAGES.projects.faan,
        side: 'left' as const,
    },
    {
        id: 'flyte',
        title: 'Flyte Technologies',
        image: IMAGES.projects.misas,
        side: 'right' as const,
    },
]

export const SERVICES = [
    {
        id: 'full-stack',
        title: 'Full-Stack Web Development',
        description:
            'I build scalable, user-friendly applications from frontend to backend.',
        icon: BrowserIcon,
        image: IMAGES.services.work,
        className: 'md:col-span-1 md:row-span-2',
    },
    {
        id: 'blockchain',
        title: 'Blockchain Development',
        description:
            'Building secure and scalable decentralized applications and smart contracts.',
        icon: CubeIcon,
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'system-architecture',
        title: 'System Architecture & Integration',
        description:
            'Crafting efficient architectures that connect services, APIs, and databases seamlessly.',
        icon: GitMergeIcon,
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'technical-leadership',
        title: 'Technical Leadership',
        description:
            'Guiding teams and projects with a balance of vision, execution, and mentorship.',
        icon: UsersFourIcon,
        images: IMAGES.services.leadership,
        className: 'md:col-span-1 md:row-span-2',
    },
]

export const CORE_SKILLS = [
    { name: 'Rust', icon: FileRsIcon },
    { name: 'Python', icon: FilePyIcon },
    { name: 'Elixir', icon: StackIcon },
    { name: 'Javascript', icon: FileJsIcon },
    { name: 'Django', icon: CodeIcon },
    { name: 'PHP', icon: CodeIcon },
    { name: 'React.JS', icon: AtomIcon },
    { name: 'Node.JS', icon: HexagonIcon },
    { name: 'Next.JS', icon: CodeIcon },
    { name: 'Typescript', icon: FileJsIcon },
]

export const INFRA_SKILLS = [
    { name: 'PostgreSQL', icon: FileSqlIcon },
    { name: 'MySQL', icon: FishIcon },
    { name: 'MongoDB', icon: LeafIcon },
    { name: 'AWS', icon: AmazonLogoIcon },
    { name: 'Docker', icon: PackageIcon },
    { name: 'CI/CD pipelines', icon: InfinityIcon },
    { name: 'GIT', icon: GitBranchIcon },
]

export const REVIEWS = [
    {
        quote: 'Working with Obed was a remarkable experience. His innovative thinking and brilliance brought about a user-friendly and and reliable wallet to life. I was really impressed by his professionalism and dedication to building something that makes crypto simpler for everybody .',
    },
    {
        quote: "Obed's vision and commitment to community-driven innovation was what really stood out for me. He built something impactful that would definitely stand the test of time and setting a strong standard in the digital economy.",
    },
    {
        quote: 'His work with Agroease did not only combine innovation and reliability, but also creativity, genuine purpose and a deep understanding of agricultural needs. Obed built Agroease to not just be an app but a smart solution that empowers farmers and connect communities.',
    },
    {
        quote: 'Working with Obed was such an exceptional experience. His technical expertise and problem-solving skills elevated every project he worked on. He delivered efficient and reliable solutions that strengthened our systems and improved overall performance.',
    },
]

export const FEATURES = [
    {
        title: 'Versatile Engineer',
        description:
            'Proficient across blockchain, backend, and frontend stacks — delivering end-to-end solutions.',
    },
    {
        title: 'Future-Ready Solutions',
        description:
            'I build scalable, modern systems using tools like Rust, Elixir, and cloud-first architectures.',
    },
    {
        title: 'Problem-Solving Mindset',
        description:
            'I focus on solving real problems, choosing the right tool for the job every time.',
    },
    {
        title: 'Collaborative Leadership',
        description:
            'Experience as a Founder and Deputy CTO means I align tech execution with business goals.',
    },
]
