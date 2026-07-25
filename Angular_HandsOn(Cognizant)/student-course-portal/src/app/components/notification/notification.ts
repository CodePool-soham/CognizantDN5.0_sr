import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],

  // Component-level provider creates a NEW instance of NotificationService
  // for this component and its children instead of using the root singleton.
  providers: [NotificationService],

  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {

  constructor(public notificationService: NotificationService) {}

}