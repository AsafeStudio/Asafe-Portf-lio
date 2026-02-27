
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Fintech',
    category: 'UI/UX & Branding',
    description: 'Interface moderna para uma plataforma de investimentos focado em alta conversão.',
    services: ['Identidade Visual', 'UI Design', 'Web App'],
    imageUrl: 'https://picsum.photos/seed/nexus/1200/800'
  },
  {
    id: '2',
    title: 'Lumina Clinic',
    category: 'Branding & Web Design',
    description: 'Estratégia visual para clínica dermatológica premium unindo sofisticação e tecnologia.',
    services: ['Logotipo', 'Site WordPress', 'Social Media'],
    imageUrl: 'https://picsum.photos/seed/lumina/1200/800'
  },
  {
    id: '3',
    title: 'Arca Studio',
    category: 'Web Design',
    description: 'Portfólio interativo para estúdio de arquitetura com foco em estética minimalista.',
    services: ['Web Design', 'Animações', 'SEO'],
    imageUrl: 'https://picsum.photos/seed/arca/1200/800'
  },
  {
    id: '4',
    title: 'Pulse Energy',
    category: 'Branding',
    description: 'Reposicionamento de marca para empresa de energia renovável.',
    services: ['Direção de Arte', 'Estratégia de Marca'],
    imageUrl: 'https://picsum.photos/seed/pulse/1200/800'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Identidade Visual & Branding',
    description: 'Criação de marcas memoráveis que comunicam valores e geram conexão emocional com o público-alvo.',
    icon: 'palette'
  },
  {
    id: 's2',
    title: 'UI Design',
    description: 'Interfaces focadas na melhor experiência visual, unindo estética impecável e funcionalidade estratégica.',
    icon: 'layout'
  },
  {
    id: 's3',
    title: 'Web Design (WordPress)',
    description: 'Desenvolvimento de sites profissionais, responsivos e otimizados para converter visitantes em clientes.',
    icon: 'globe'
  },
  {
    id: 's4',
    title: 'Criação de interfaces via IA + Códigos',
    description: 'Implementação técnica de layouts de alta fidelidade utilizando o poder da IA e desenvolvimento front-end moderno para máxima performance.',
    icon: 'code',
    isSpecial: true
  }
];
