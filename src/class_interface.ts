interface Alarm {
  alert();
}

class Door {}
class SecurityDoor extends Door implements Alarm {
  alert() {
    throw new Error('Method not implemented.');
  }
}

interface LightableAlarm extends Alarm {
  lightOn();
  lightOff();
}
