import { Component, Input } from '@angular/core';
import { Project } from 'src/types/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @Input() project: Project = {
    linkGithub: '',
    linkLive: '',
    image: '',
    features: [''],
    title: '',
    color: '',
    index: 1,
    bg: '',
  };
}
