import industry from '../assets/images/industry 4.0.jpg'
import processAutomation from '../assets/images/process-automation.jpg'
import webDev from '../assets/images/web-design.jpg'
import networkSol from '../assets/images/network1.jpg'
import plcSensor from '../assets/images/PLC.png'
import consulting from '../assets/images/consulting_services.jpg'

export const services = [
  {
    id: 1,
    anchor: 'industry4',
    title: 'Industry 4.0',
    icon: 'Settings',
    image: industry,
    shortDescription: 'Data acquisition, cloud reporting, IIoT, machine vision and industrial automation',
  },
  {
    id: 2,
    anchor: 'automation',
    title: 'Process Automation',
    icon: 'RefreshCw',
    image: processAutomation,
    shortDescription: 'Customer management, logistics solutions and process traceability systems',
  },
  {
    id: 3,
    anchor: 'webdev',
    title: 'Web Development',
    icon: 'Globe',
    image: webDev,
    shortDescription: 'eCommerce platforms, business management systems and corporate websites',
  },
  {
    id: 4,
    anchor: 'network',
    title: 'Network Solutions',
    icon: 'Network',
    image: networkSol,
    shortDescription: 'Mesh networking, network design, debugging and CCTV network setup',
  },
  {
    id: 5,
    anchor: 'plc',
    title: 'PLCs, Sensors & Safety',
    icon: 'Cpu',
    image: plcSensor,
    shortDescription: 'Siemens, Omron, Allen Bradley, Mitsubishi, Schneider and more',
  },
  {
    id: 6,
    anchor: 'consulting',
    title: 'Consulting Services',
    icon: 'Wrench',
    image: consulting,
    shortDescription: 'SAP solutions, AMC for computers, CCTV installation and technical support',
  },
]
