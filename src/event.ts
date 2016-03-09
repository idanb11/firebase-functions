interface FirebaseEventOptions {
  service: string;
  type: string;
  instance?: string;
  uid?: string;
  deviceId?: string;
  data?: any;
}

export default class FirebaseEvent {
  service: string;
  type: string;
  instance: string;
  uid: string;
  deviceId: string;
  data: any;

  constructor(options: FirebaseEventOptions) {
    [this.service, this.type, this.instance, this.uid, this.deviceId, this.data] =
      [options.service, options.type, options.instance, options.uid, options.deviceId, options.data];
  }
}