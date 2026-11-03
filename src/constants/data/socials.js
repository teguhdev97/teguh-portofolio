import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTelegram2Fill } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export const Socials = [
    {
        reactIcon : <MdOutlineAlternateEmail size={18}/>,
        background: '#18a34c',
        link: 'https://mailto:aiguh97@gmail.com',
        eventName: 'Contact: Email',
        label: 'Email',
    },
    {
        reactIcon : <RiInstagramFill size={18}/>,
        background: '#c2410c',
        link: 'https://www.instagram.com/am.are.is3/',
        eventName: 'Social: Instagram',
        label: 'Instagram',
    },
    {
        reactIcon : <RiLinkedinFill size={18}/>,
        background: '#3b82f6',
        link: 'https://www.linkedin.com/in/teguh-m-harits//',
        eventName: 'Social: Linkedin',
        label: 'Linkedin',
    },
    {
        reactIcon : <RiGithubFill size={18}/>,
        background: '#000',
        link: 'https://github.com/aiguh97',
        eventName: 'Social: Github',
        label: 'Github',
    },
    {
        reactIcon : <RiTelegram2Fill size={18}/>,
        background: '#0088cc',
        link: 'https://t.me/teguhdev',
        eventName: 'Contact: Telegram',
        label: 'Telegram',
    },
]