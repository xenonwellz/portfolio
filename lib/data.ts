import {
    FileJs,
    FilePy,
    Code,
    Atom,
    Hexagon,
    Stack,
    FileSqlIcon,
    FishIcon,
    LeafIcon,
    AmazonLogoIcon,
    Package,
    GitBranch,
    InfinityIcon,
    Browser,
    Cube,
    GitMerge,
    UsersFour,
    GithubLogoIcon,
    XLogoIcon,
    LinkedinLogoIcon,
    FileRsIcon,
} from '@phosphor-icons/react'

export const HERO_CONTENT = {
    title: 'Obed Ovabor',
    subtitle: 'Building the future of software, one line at a time.',
    description: 'Expert in Blockchain & Fullstack Development.',
}

export const NAV_LINKS = [
    { name: 'Skills', href: '#skills' },
    { name: 'My Work', href: '#work' },
    { name: 'About', href: '#about' },
]

export const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com', icon: GithubLogoIcon },
    { name: 'X', href: 'https://x.com', icon: XLogoIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinLogoIcon },
]

export const IMAGES = {
    experience: {
        xenrad: '/images/experience/xenrad.png',
        agroease: '/images/experience/agroease.png',
        bful: '/images/experience/bful.png',
        flyte: '/images/experience/flyte.png',
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
        fullStack: '/images/full-stack.png',
        leadership: [
            '/images/leadership-1.png',
            '/images/leadership-2.png',
            '/images/leadership-3.png',
        ],
    },
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
    },
    {
        id: 'smc-dao',
        title: 'SMC DAO',
        image: IMAGES.projects.smcDao,
        link: 'https://smcdao.org',
        hasButton: true,
        side: 'right' as const,
    },
    {
        id: 'peniwallet',
        title: 'Peniwallet',
        image: IMAGES.projects.peniwallet,
        link: 'https://peniwallet.com',
        hasButton: true,
        side: 'left' as const,
    },
    {
        id: 'xcel-radiology',
        title: 'Xcel Radiology',
        image: IMAGES.projects.xcelrad,
        link: 'https://xcelradiology.com',
        hasButton: true,
        side: 'right' as const,
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
        icon: Browser,
        image: IMAGES.services.fullStack,
        className: 'md:col-span-1 md:row-span-2',
    },
    {
        id: 'blockchain',
        title: 'Blockchain Development',
        description:
            'Building secure and scalable decentralized applications and smart contracts.',
        icon: Cube,
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'system-architecture',
        title: 'System Architecture & Integration',
        description:
            'Crafting efficient architectures that connect services, APIs, and databases seamlessly.',
        icon: GitMerge,
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'technical-leadership',
        title: 'Technical Leadership',
        description:
            'Guiding teams and projects with a balance of vision, execution, and mentorship.',
        icon: UsersFour,
        images: IMAGES.services.leadership,
        className: 'md:col-span-1 md:row-span-2',
    },
]

export const CORE_SKILLS = [
    { name: 'Rust', icon: FileRsIcon },
    { name: 'Python', icon: FilePy },
    { name: 'Elixir', icon: Stack },
    { name: 'Javascript', icon: FileJs },
    { name: 'Django', icon: Code },
    { name: 'PHP', icon: Code },
    { name: 'React.JS', icon: Atom },
    { name: 'Node.JS', icon: Hexagon },
    { name: 'Next.JS', icon: Code },
    { name: 'Typescript', icon: FileJs },
]

export const INFRA_SKILLS = [
    { name: 'PostgreSQL', icon: FileSqlIcon },
    { name: 'MySQL', icon: FishIcon },
    { name: 'MongoDB', icon: LeafIcon },
    { name: 'AWS', icon: AmazonLogoIcon },
    { name: 'Docker', icon: Package },
    { name: 'CI/CD pipelines', icon: InfinityIcon },
    { name: 'GIT', icon: GitBranch },
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
