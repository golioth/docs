---
id: register
title: Registration & Wizard
---

import FlexImage from '@site/src/components/FlexImage';
import GoliothConsoleOnboarding from '../assets/console-onboarding.png';
import GoliothConsoleVerifyEmail from '../assets/console-verify-email.png';

import GoliothWizard1 from '../assets/console-quickstart-step1-wizard.png';
import GoliothProjectCreate from '../assets/console-quickstart-step1-createproject.png';

import GoliothWizard2 from '../assets/console-quickstart-step2-wizard.png';
import GoliothCreateDevice from '../assets/console-quickstart-step2-createdevice.png';
import GoliothDeviceCreateConfirm from '../assets/console-quickstart-step2-confirmation.png';

## Creating your Golioth account

<FlexImage column_count="2">
  <img src={GoliothConsoleOnboarding} alt="Golioth console sign-up questions"/>
  <img src={GoliothConsoleVerifyEmail} alt="Golioth console verify email"/>
</FlexImage>

To begin using Golioth please register for an account at
[console.golioth.io](https://console.golioth.io/).

Once registered, you will be asked some onboarding questions and to review our
terms of service. You will need to verify your email address to continue.

## Creating a new Project

<FlexImage column_count="2">
  <img src={GoliothWizard1} alt="Golioth console add project wizard"/>
  <img src={GoliothProjectCreate} alt="Golioth console create a project"/>
</FlexImage>

### Project name

Golioth organizes fleets into "Projects". When first logging into Golioth you
will be directed to create a project using the `Create` button in the upper
right. You may use the auto-generated project name, or create your own. Project
names cannot be changed after creation so pick a good one!

## Creating a new Device

<FlexImage column_count="3">
  <img src={GoliothWizard2} alt="Golioth console wizard create a device"/>
  <img src={GoliothCreateDevice} alt="Golioth console device creation dialog"/>
  <img src={GoliothDeviceCreateConfirm} alt="Golioth console device created confirmation"/>
</FlexImage>

### Device name

Each project is made up of a number of devices. The next step will direct you to
create a device using the `Create` button in the upper right. Once again you may
use the auto-generated device name or create your own. Device names may be
changed at any time.

### Tags and Hardware IDs

Tags and Hardware IDs are a great tool for organizing your growing fleet. For
now we'll leave these blank.

### Device credentials

By default, a Pre-Shared Key (PSK) credential is automatically generated. This
is a PSK-ID and PSK pair that will authenticate this device to the Golioth
Cloud.

## That's it!

It really is that simple, you have provisioned your first device! Let's
provision a second device to get to know the console just a bit better.
