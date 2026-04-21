import industry from '../assets/images/industry 4.0.jpg'
import processAutomation from '../assets/images/process-automation.jpg'
import webDev from '../assets/images/web_dev2.jpg'
import networkSol from '../assets/images/network_sol.png'
import plcSensor from '../assets/images/PLC.png'
import consulting from '../assets/images/consulting_services.jpg'

export const services = [
  {
    id: 1,
    title: 'Industry 4.0',
    icon: 'Settings',
    image: industry,
    shortDescription: 'Data acquisition, cloud reporting, IIoT, machine vision and industrial automation',
  },
  {
    id: 2,
    title: 'Process Automation',
    icon: 'RefreshCw',
    image: processAutomation,
    shortDescription: 'Customer management, logistics solutions and process traceability systems',
  },
  {
    id: 3,
    title: 'Web Development',
    icon: 'Globe',
    image: webDev,
    shortDescription: 'eCommerce platforms, business management systems and corporate websites',
  },
  {
    id: 4,
    title: 'Network Solutions',
    icon: 'Network',
    image: networkSol,
    shortDescription: 'Mesh networking, network design, debugging and CCTV network setup',
  },
  {
    id: 5,
    title: 'PLCs, Sensors & Safety',
    icon: 'Cpu',
    image: plcSensor,
    shortDescription: 'Siemens, Omron, Allen Bradley, Mitsubishi, Schneider and more',
  },
  {
    id: 6,
    title: 'Consulting Services',
    icon: 'Wrench',
    image: consulting,
    shortDescription: 'SAP solutions, AMC for computers, CCTV installation and technical support',
  },
]
