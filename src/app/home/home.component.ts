import { Component, HostBinding, SimpleChanges } from '@angular/core';
import { routeAnimationState } from '../route_transition_animations';
import { NavigateAnimationService } from '../navigation/navigate-animation.service';
import { Project } from 'src/types/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimationState],
})
export class HomeComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  constructor(private navigation: NavigateAnimationService) {}
  projects: Project[] = [
    {
      title: 'Clinic Managemnt',
      linkGithub: '',
      linkLive: 'https://cabient.vercel.app/',
      image: 'assets/clinic.png',
      features: [
        'Authentication: Login Page, Roles: Admin and Secretary',
        'Appointment Management: Calendar Page, Schedule Appointments, Organize Appointments',
        'Patient Management (Secretary Role): Add Patient, Modify Patient, Remove Patient, View Patient Stats',
        'Reports (Admin Role): Clinic Earnings Stats',
        'Services Management (Admin Role): Add Service, Remove Service, Update Service, View Service Stats',
        'Service Appointments (Admin Role): Today Appointments for Each Service',
        'Doctor Management (Admin Role): Add Doctor, Edit Doctor, Remove Doctor, View Doctor Stats',
        'Doctor Appointments (Admin Role): Today Appointments for Each Doctor',
        'Employee Management (Admin Role): Add Employee, Edit Employee, Delete Employee, Real-time Employee Management, Automatic Logout on Employee Deletion',
      ],
      index: 1,
      color: 'text-gry-950',
      bg: 'hover:bg-gray-950 hover:border-gray-950',
    },
    {
      linkGithub: 'https://github.com/animotime-v3/yummy-s',
      linkLive: 'https://yummy-zeta.vercel.app/',
      image: 'assets/yummy.png',
      features: [
        'YUMMY: A dynamic Food Delivery app with animations.',
        ' Integrates with SanityCMS for efficient content management.',
        'Admin dashboard: Real-time order tracking, data visualization, and earnings insights.',
        'User-focused: Personalized meal saving feature. Rewards system: Point-based system for user engagement.',
      ],
      title: 'YUMMY',
      color: 'text-yellow-500',
      index: 3,
      bg: 'hover:bg-yellow-500  hover:border-yellow-500',
    },
    {
      title: 'ATLAS Travel',
      index: 4,
      linkGithub: '#',
      linkLive: 'https://travelatlasmorocco.com/en/',
      color: 'text-orange-500',
      features: [
        'Complete website development',
        'Includes contact page and advanced filtering',
        'Multilingual support',
        'Features route and destination management system',
      ],
      image: 'assets/atlas.png',
      bg: 'hover:bg-orange-500 hover:border-orange-500',
    },
  ];
}
