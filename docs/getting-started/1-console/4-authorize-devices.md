---
id: authorize-devices
title: Authorize Devices
---

To connect to the Golioth Cloud, we need to create a credentials for the newly created device.

Open the device details screen can by first selecting the Management&rarr;Devices option from the left sidebar. This will bring up a list of all of your devices. In the Action column, click the sliders icon for your device.

![A device without credentials](../assets/gettingstarted-console-deviceview-nocredentials.png)

* Click the Create button in the Credentials section.

    ![Adding device credentials](../assets/gettingstarted-console-createcredentials.png)

* The identity of this device can be auto-generated from the device name so leave this empty
* Golioth will automatically assign a random PSK, or you can choose your own
* Click Save to go back to the device details screen

![Device details now includes device credentials](../assets/gettingstarted-console-deviceview-credentialspanel.png)

The credentials have been added to this device. Note the automatically assigned identity includes a GMT timestamp, the name of the device, and the name of the project. These two values (the Identity and the Pre Shared Key) are what your device needs to authenticate and connect to the Golioth Cloud.

Congratulations, you're ready to move on to selecting hardware!
