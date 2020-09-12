import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user-permission',
  templateUrl: './get-user-permission.component.html',
  styleUrls: ['./get-user-permission.component.css']
})
export class GetUserPermissionComponent implements OnInit {

  locationState: any;
  microphoneState: any;
  cameraState: any;
  notificationState: any;
  backgroundState: any;
  clipboardReadState: any;

  constructor () {
  }

  ngOnInit() {

    this.getPermissionStatus();

  }

  async getPermissionStatus() {

    //State - "granted", "prompt" or "denied"

    // Location State
    this.locationState = await navigator.permissions.query({
      name: 'geolocation'
    }).then((permission) => {
      if (permission && permission.state) {
        if (permission.state === 'granted') {
          return 'Granted';
        } else if (permission.state === 'denied') {
          return 'Blocked';
        }
        return permission.state;
      }
    });

    // Microphone State
    this.microphoneState = await navigator.permissions.query({
      name: "microphone"
    }).then((permission) => {
      if (permission && permission.state) {
        if (permission.state === 'granted') {
          return 'Granted';
        } else if (permission.state === 'denied') {
          return 'Blocked';
        }
        return permission.state;
      }
    });

    // Camera State
    this.cameraState = await navigator.permissions.query({
      name: "camera"
    }).then((permission) => {
      if (permission && permission.state) {
        if (permission.state === 'granted') {
          return 'Granted';
        } else if (permission.state === 'denied') {
          return 'Blocked';
        }
        return permission.state;
      }
    });

    // Notifications State
    this.notificationState = await navigator.permissions.query({
      name: 'notifications'
    }).then((permission) => {
      if (permission && permission.state) {
        if (permission.state === 'granted') {
          return 'Granted';
        } else if (permission.state === 'denied') {
          return 'Blocked';
        }
        return permission.state;
      }
    });

    // Background-Sync State
    this.backgroundState = await navigator.permissions.query({
      name: "background-sync"
    }).then((permission) => {
      if (permission && permission.state) {
        if (permission.state === 'granted') {
          return 'Granted';
        } else if (permission.state === 'denied') {
          return 'Blocked';
        }
        return permission.state;
      }
    });

    // Clipboard State
    let read: any = "clipboard-read";
    this.clipboardReadState = await navigator.permissions.query({
      name: read
    }).then((permission) => {
      if (permission && permission.state) {
        if (permission.state === 'granted') {
          return 'Granted';
        } else if (permission.state === 'denied') {
          return 'Blocked';
        }
        return permission.state;
      }
    });


  }

  promptLocation =  () => {
     navigator.geolocation.getCurrentPosition(function(position) {
    });
  }

  promptMicrophone = async () => {
    await navigator.mediaDevices.getUserMedia( { audio: true, video: false } );
  }

  promptCamera = async () => {
    await navigator.mediaDevices.getUserMedia( { audio: false, video: true } );
  }

  promptNotification = () => {
    Notification.requestPermission();
  }

  promptClipboard = () => {
    navigator.clipboard.readText();
  }

  promptBackgroundSync() {
    console.log("back");
    // Notification.requestPermission(permission => {
    //   console.log(permission,"perrrr");
    //   if (permission === 'granted'){ this.registerBackgroundSync() }
    //   else console.error("Permission was not granted.")
    // })
  }
  // registerBackgroundSync() {
  //   try {
  //     console.log("here comesssssss");
  //     if (!navigator.serviceWorker) {
  //       return console.log("Service Worker not supported")
  //     }
  //     console.log("midd");
  //     navigator.serviceWorker.ready
  //       .then((registration) => {
  //         console.log("ress", registration);
  //         registration.sync.register('syncAttendees')
  //       }).then(() => console.log("Registered background sync"))
  //       .catch(err => console.log("Error registering background sync", err))
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
}
