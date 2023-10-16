---
id: register
title: Registration & Wizard
---

To begin using Golioth please register for an account at
[console.golioth.io](https://console.golioth.io/).

import Image from '@theme/IdealImage';
import FlexImage from '@site/src/components/FlexImage';
import GoliothConsoleOnboarding from '../assets/console-onboarding.jpg';
import GoliothConsoleEmpty from '../assets/console-click-quickstart.jpg';
import GoliothConsoleQuickstart from '../assets/console-quickstart-lets-go.jpg';
import GoliothWizard1 from '../assets/console-quickstart-step1.jpg';
import GoliothWizard2 from '../assets/console-quickstart-step2.jpg';
import GoliothWizard3 from '../assets/console-quickstart-step3.jpg';

<FlexImage column_count="3">
  <Image img={GoliothConsoleOnboarding} alt="Golioth console without a project"/>
  <Image img={GoliothConsoleEmpty} alt="Golioth console without a project"/>
  <Image img={GoliothConsoleQuickstart} alt="Golioth console quickstart launch screen"/>
</FlexImage>

Once registered, you will be asked some onboarding questions and to review our
terms of service. The console will be quite empty, so select `Quick Start` from
top of the screen and click `Let's Go!` to use the quickstart wizard. The wizard
includes three steps:

<FlexImage column_count="3">
  <Image img={GoliothWizard1} alt="Golioth console wizard create a project"/>
  <Image img={GoliothWizard2} alt="Golioth console wizard register a device"/>
  <Image img={GoliothWizard3} alt="Golioth console wizard setup your device"/>
</FlexImage>

### Step 1: Project name

* Enter a Project Name of your choosing

### Step 2: Device name

* Enter a human-readable Device Name

### Step 3: Device credentials

* The Identity of this device is automatically populated from the device name with `-id` and `@project-name` appended
* A Pre-Shared Key (PSK) is automatically generated. This is a password that will authenticate this device to the Golioth Cloud

It really is that simple, you have provisioned your first device! Let's provision a second device to get to know the console just a bit better.
