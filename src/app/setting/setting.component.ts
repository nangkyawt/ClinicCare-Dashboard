import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  selectedTab: string = 'profile'; // Default tab is 'profile'

  profile = { name: '', email: '' };
  password = { oldPassword: '', newPassword: '', confirmPassword: '' };
  notifications = { email: false, sms: false };
  privacy = { accountVisibility: 'public', twoFactor: false };

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  saveProfileSettings() {
    console.log('Profile saved', this.profile);
  }

  changePassword() {
    console.log('Password changed', this.password);
  }

  saveNotificationSettings() {
    console.log('Notifications saved', this.notifications);
  }

  savePrivacySettings() {
    console.log('Privacy settings saved', this.privacy);
  }
}
