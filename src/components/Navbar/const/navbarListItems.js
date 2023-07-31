import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import FunctionsIcon from '@mui/icons-material/Functions';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export const navbarListItems = [
    { id: 0, icon: <PeopleIcon />, label: 'Authentication', route: 'authentication' },
    { id: 1, icon: <DnsIcon /> , label: 'DNS', route: 'dns' }, 
    { id: 2, icon: <ImageIcon />, label: 'Image', route: 'image' },
    { id: 3, icon: <PublicIcon />, label: 'Public', route: 'public' },
    { id: 4, icon: <FunctionsIcon />, label: 'Functions', route: 'functions' },
    { id: 5, icon: <PrecisionManufacturingIcon />, label: 'Precision Manufacturing', route: 'precision' },
];